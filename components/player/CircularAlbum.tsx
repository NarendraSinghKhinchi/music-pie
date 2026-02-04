import { Image, View, useWindowDimensions } from "react-native"

interface Props {
  coverUrl: string
}

export const CircularAlbum = ({ coverUrl }: Props) => {
  const { width } = useWindowDimensions()

  return (
    <View className="items-end">
      <Image
        source={require("@/assets/images/playerr.png")}
        style={{
          width: width * 0.5,   // 50% of device width
          aspectRatio: 1 / 2.3,   // adjust to your image ratio
        }}
        resizeMode="cover"
      />
    </View>
  )
}
