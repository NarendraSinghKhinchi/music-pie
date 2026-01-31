import { View } from "react-native"
import { Text } from "../ui/text"

interface Props {
  title: string
  artist: string
  device: string
}

export const SongInfo = ({ title, artist, device }: Props) => {
  return (
    <View className="mt-12 px-8">
      <Text className="text-3xl font-bold text-slate-900">
        {title}
      </Text>

      <Text className="text-lg font-semibold text-slate-700 mt-1">
        {artist}
      </Text>

      <Text className="text-sm text-sky-500 mt-2">
        {device}
      </Text>
    </View>
  )
}
