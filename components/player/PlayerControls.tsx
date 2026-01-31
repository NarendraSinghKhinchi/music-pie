import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, View } from "react-native"

export const PlayerControls = () => {
  return (
    <View className="absolute left-6 top-48 bg-sky-100 rounded-3xl px-4 py-6 shadow-xl shadow-sky-300 space-y-6">
      <Ionicons name="power" size={20} color="#94a3b8" />

      <Ionicons name="play" size={20} color="#94a3b8" />

      <Ionicons name="pause" size={20} color="#94a3b8" />

      <Ionicons name="play-skip-back" size={20} color="#94a3b8" />

      <TouchableOpacity>
        <Ionicons name="heart" size={20} color="#ef4444" />
      </TouchableOpacity>
    </View>
  )
}
