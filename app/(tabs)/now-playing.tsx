
import { CircularAlbum } from "@/components/player/CircularAlbum"
import { LyricsButton } from "@/components/player/LyricsButton"
import { PlayerControls } from "@/components/player/PlayerControls"
import { SongInfo } from "@/components/player/SongInfo"
import { Text } from "@/components/ui/text"
import { Song } from "@/types/music"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const song: Song = {
  title: "DUSK TILL DOWN",
  artist: "ZAYN ft. Sia",
  device: "Kazuyo’s Air Pods Pro",
  coverUrl:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
}

export default function MusicPlayerScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#badcee]">
      <View className="flex-1 justify-between">
        <SongInfo {...song} />
        <PlayerControls />
        <CircularAlbum coverUrl={song.coverUrl} />

        <View className="pb-1">
          <Text className="mt-2 text-center text-slate-800 font-semibold">
            But you'll <Text className="text-sky-600">never be alone</Text>
          </Text>
          <LyricsButton />
        </View>
      </View>
    </SafeAreaView>
  )
}
