import { useEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Text } from "@/components/ui/text";

import { getAudioFiles } from "@/lib/media";
import { usePlayer } from "@/store/player-context";

export default function LibraryScreen() {
  const [tracks, setTracks] = useState<any[]>([]);
  const player = usePlayer();

  useEffect(() => {
    getAudioFiles().then(setTracks);
  }, []);


  return (
    <FlatList
      data={tracks}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) =>{
        return  (
        <Pressable
          onPress={() => player.play(item, tracks)}
          className="px-4 py-3 border-b border-border"
        >
          <Text className="text-base">{item.filename}</Text>
        </Pressable>
      )
      }}
    />
  );
}
