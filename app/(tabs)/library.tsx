import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAudioFiles } from "@/lib/media";
import { usePlayer } from "@/store/player-context";

export default function LibraryScreen() {
  const [tracks, setTracks] = useState<any[]>([]);
  const player = usePlayer();

  useEffect(() => {
    getAudioFiles().then(setTracks);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#badcee]">
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => player.play(item, tracks)}
              className="mx-4 mb-4 flex-row items-center rounded-full bg-[#BEE0F4] px-4 py-2 border-2 border-white"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.15,
                shadowRadius: 12,
                elevation: 6,
              }}
            >
              <Avatar alt="pie's Avatar" className="size-10">
                <AvatarImage source={{ uri: "https://i.pravatar.cc/100?img=12" }} />
                <AvatarFallback>
                  <Text>PIE</Text>
                </AvatarFallback>
              </Avatar>
              <Text
                numberOfLines={2}
                className="flex-1 text-sm text-blue-900 font-medium ml-2"
              >
                {item.filename}
              </Text>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
