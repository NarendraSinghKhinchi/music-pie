import { View } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { usePlayer } from "@/store/player-context";

export default function NowPlayingScreen() {
  const { currentTrack, isPlaying, toggle, next, prev } = usePlayer();

  if (!currentTrack) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>No track playing</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center gap-6">
      <Text className="text-lg text-center px-6">
        {currentTrack.filename}
      </Text>

      <View className="flex-row gap-4">
        <Button variant="outline" onPress={prev}>
          <Text>Prev</Text>
        </Button>

        <Button onPress={toggle}>
         <Text>{isPlaying ? "Pause" : "Play"}</Text>
        </Button>

        <Button variant="outline" onPress={next}>
          <Text>Next</Text>
        </Button>
      </View>
    </View>
  );
}
