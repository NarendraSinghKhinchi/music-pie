import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

type Track = {
  id: string;
  uri: string;
  filename?: string;
  duration?: number;
};

type PlayerContextType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  position: number;
  duration: number;
  play: (track: Track, queue?: Track[]) => Promise<void>;
  toggle: () => Promise<void>;
  seek: (ms: number) => Promise<void>;
  next: () => Promise<void>;
  prev: () => Promise<void>;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const queueRef = useRef<Track[]>([]);
  const indexRef = useRef(0);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    });
  }, []);

  const load = async (track: Track) => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    const { sound, status } = await Audio.Sound.createAsync(
      { uri: track.uri },
      { shouldPlay: true },
      onStatus
    );

    soundRef.current = sound;
    setCurrentTrack(track);
    setIsPlaying(true);

    if (status.isLoaded) {
      setDuration(status.durationMillis ?? 0);
    }
  };

  const onStatus = (status: any) => {
    if (!status.isLoaded) return;
    setPosition(status.positionMillis ?? 0);
    setIsPlaying(status.isPlaying);

    if (status.didJustFinish) {
      next();
    }
  };

  const play = async (track: Track, queue: Track[] = []) => {
    queueRef.current = queue.length ? queue : [track];
    indexRef.current = queue.findIndex(t => t.id === track.id);
    await load(track);
  };

  const toggle = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    status.isPlaying
      ? await soundRef.current.pauseAsync()
      : await soundRef.current.playAsync();
  };

  const seek = async (ms: number) => {
    if (!soundRef.current) return;
    await soundRef.current.setPositionAsync(ms);
  };

  const next = async () => {
    if (!queueRef.current.length) return;
    indexRef.current = (indexRef.current + 1) % queueRef.current.length;
    await load(queueRef.current[indexRef.current]);
  };

  const prev = async () => {
    if (!queueRef.current.length) return;
    indexRef.current =
      (indexRef.current - 1 + queueRef.current.length) % queueRef.current.length;
    await load(queueRef.current[indexRef.current]);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        position,
        duration,
        play,
        toggle,
        seek,
        next,
        prev,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
};
