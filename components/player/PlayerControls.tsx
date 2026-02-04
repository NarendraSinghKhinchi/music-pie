import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, View } from "react-native"

export const PlayerControls = () => {
  return (
    <View className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#B0D5EA] border-2 border-[#ffffff] rounded-full px-4 py-6 flex flex-col gap-8 items-center justify-center">
      <Ionicons name="power" size={32} color="#77B0D4" />
      <Ionicons name="play" size={32} color="#77B0D4" />
      <Ionicons name="pause" size={32} color="#77B0D4" />
      <Ionicons name="play-skip-back" size={32} color="#77B0D4" />
      <TouchableOpacity>
        <Ionicons name="heart" size={32} color="#ef4444" />
      </TouchableOpacity>
    </View>
  )
}
