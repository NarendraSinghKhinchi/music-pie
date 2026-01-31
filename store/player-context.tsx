import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { createAudioPlayer, useAudioPlayerStatus } from "expo-audio";

type Track = {
  id: string;
  uri: string;
  filename?: string;
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
  const playerRef = useRef<ReturnType<typeof createAudioPlayer> | null>(null);
  const queueRef = useRef<Track[]>([]);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => {
      playerRef.current?.remove();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startTracking = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if(!playerRef.current)return;

      const status = useAudioPlayerStatus( playerRef.current);
      if (!status?.isLoaded) return;

      setPosition(status.currentTime);
      setDuration(status.duration);
      setIsPlaying(status.playing);

      if (status.didJustFinish) {
        next();
      }
    }, 500);
  };

  const load = async (track: Track) => {
    playerRef.current?.remove();

    const player = createAudioPlayer({ uri: track.uri });
    player.play();

    playerRef.current = player;
    setCurrentTrack(track);
    setIsPlaying(true);

    startTracking();
  };

  const play = async (track: Track, queue: Track[] = []) => {
    const finalQueue = queue.length ? queue : [track];
    queueRef.current = finalQueue;
    indexRef.current = Math.max(
      0,
      finalQueue.findIndex(t => t.id === track.id)
    );
    await load(finalQueue[indexRef.current]);
  };

  const toggle = async () => {
    const player = playerRef.current;
    if (!player) return;
    player.playing ? player.pause() : player.play();
  };

  const seek = async (ms: number) => {
    playerRef.current?.seekTo(ms);
    setPosition(ms);
  };

  const next = async () => {
    if (!queueRef.current.length) return;
    indexRef.current = (indexRef.current + 1) % queueRef.current.length;
    await load(queueRef.current[indexRef.current]);
  };

  const prev = async () => {
    if (!queueRef.current.length) return;
    indexRef.current =
      (indexRef.current - 1 + queueRef.current.length) %
      queueRef.current.length;
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
