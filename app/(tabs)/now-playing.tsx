import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { usePlayer } from "@/store/player-context";
import { useColorScheme } from "nativewind";
import { SunIcon, MoonStarIcon } from "lucide-react-native";

export default function NowPlayingScreen() {
  const { currentTrack, isPlaying, toggle, next, prev } = usePlayer();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  if (!currentTrack) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text>No track playing</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      {/* Theme toggle (absolute, safe-area aware) */}
      <View className="absolute bottom-0 right-0 z-10 p-4">
        <Button
          size="icon"
          variant="ghost"
          onPress={toggleColorScheme}
          className="rounded-full"
        >
          <Icon
            as={colorScheme === "dark" ? SunIcon : MoonStarIcon}
            className="size-7"
          />
        </Button>
      </View>

      {/* Main content */}
      <View className="flex-1 items-center justify-center gap-6 px-6">
        <Text className="text-lg text-center">
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
    </SafeAreaView>
  );
}
