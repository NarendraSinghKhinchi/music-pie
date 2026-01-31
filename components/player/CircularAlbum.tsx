import { Image, View } from "react-native"

interface Props {
  coverUrl: string
}

export const CircularAlbum = ({ coverUrl }: Props) => {
  return (
    <View className="items-end mt-10">
      <View className="w-64 h-64 rounded-full bg-sky-100 shadow-2xl shadow-sky-300 items-center justify-center">
        <View className="w-52 h-52 rounded-full overflow-hidden">
          <Image
            source={{ uri: coverUrl }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  )
}
