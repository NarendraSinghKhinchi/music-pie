// import { View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Button } from "@/components/ui/button";
// import { Text } from "@/components/ui/text";
// import { Icon } from "@/components/ui/icon";
// import { usePlayer } from "@/store/player-context";
// import { useColorScheme } from "nativewind";
// import { SunIcon, MoonStarIcon } from "lucide-react-native";

// export default function NowPlayingScreen() {
//   const { currentTrack, isPlaying, toggle, next, prev } = usePlayer();
//   const { colorScheme, toggleColorScheme } = useColorScheme();

//   if (!currentTrack) {
//     return (
//       <SafeAreaView className="flex-1 items-center justify-center">
//         <Text>No track playing</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1">
//       {/* Theme toggle (absolute, safe-area aware) */}
//       <View className="absolute bottom-0 right-0 z-10 p-4">
//         <Button
//           size="icon"
//           variant="ghost"
//           onPress={toggleColorScheme}
//           className="rounded-full"
//         >
//           <Icon
//             as={colorScheme === "dark" ? SunIcon : MoonStarIcon}
//             className="size-7"
//           />
//         </Button>
//       </View>

//       {/* Main content */}
//       <View className="flex-1 items-center justify-center gap-6 px-6">
//         <Text className="text-lg text-center">
//           {currentTrack.filename}
//         </Text>

//         <View className="flex-row gap-4">
//           <Button variant="outline" onPress={prev}>
//             <Text>Prev</Text>
//           </Button>

//           <Button onPress={toggle}>
//             <Text>{isPlaying ? "Pause" : "Play"}</Text>
//           </Button>

//           <Button variant="outline" onPress={next}>
//             <Text>Next</Text>
//           </Button>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }


import { CircularAlbum } from "@/components/player/CircularAlbum"
import { LyricsButton } from "@/components/player/LyricsButton"
import { PlayerControls } from "@/components/player/PlayerControls"
import { SongInfo } from "@/components/player/SongInfo"
import { Text } from "@/components/ui/text"
import { Song } from "@/types/music"
import { SafeAreaView, View } from "react-native"

const song: Song = {
  title: "DUSK TILL DOWN",
  artist: "ZAYN ft. Sia",
  device: "Kazuyo’s Air Pods Pro",
  coverUrl:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
}

export default function MusicPlayerScreen() {
  return (
    <SafeAreaView className="flex-1 bg-sky-100">
      <View className="flex-1">
        <SongInfo {...song} />
        <PlayerControls />
        <CircularAlbum coverUrl={song.coverUrl} />

        <Text className="mt-12 text-center text-slate-800 font-semibold">
          But you'll <Text className="text-sky-600">never be alone</Text>
        </Text>

        <LyricsButton />
      </View>
    </SafeAreaView>
  )
}
