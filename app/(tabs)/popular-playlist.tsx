import { MoreHorizontal } from "lucide-react-native";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const playlists = [
    {
        id: "1",
        title: "Pop Playlist",
        songs: "80 Songs",
        image:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
    {
        id: "2",
        title: "Top Beats",
        songs: "40 Songs",
        image:
            "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
];

const featured = {
    title: "Popular Playlist",
    songs: "80 Songs",
    image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
};

export default function LibraryScreen() {
    return (
        <ScrollView
            className="flex-1 bg-sky-200"
            contentContainerStyle={{ paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}
        >
            {/* HEADER */}
            <View className="px-6 pt-14 flex-row items-center justify-between">
                <Text className="text-xl font-semibold text-sky-700">
                    Popular Playlist
                </Text>

                <Pressable className="w-9 h-9 rounded-full bg-white/40 items-center justify-center">
                    <MoreHorizontal size={18} color="#0369a1" />
                </Pressable>
            </View>

            {/* HORIZONTAL PLAYLISTS */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mt-6 pl-6"
            >
                {playlists.map((item) => (
                    <View
                        key={item.id}
                        className="mr-5 w-44 bg-sky-100 rounded-3xl p-4 shadow-md"
                    >
                        <View className="h-36 rounded-2xl overflow-hidden">
                            <Image
                                source={{ uri: item.image }}
                                className="w-full h-full"
                            />
                        </View>

                        <Text className="mt-4 text-sm font-semibold text-sky-900">
                            {item.title}
                        </Text>
                        <Text className="text-xs text-sky-600">
                            {item.songs}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            {/* FEATURED PLAYLIST */}
            <View className="px-6 mt-8">
                <View className="h-48 rounded-3xl overflow-hidden shadow-lg">
                    <Image
                        source={{ uri: featured.image }}
                        className="w-full h-full"
                    />

                    {/* Overlay */}
                    <View className="absolute inset-0 bg-black/30" />

                    {/* Text */}
                    <View className="absolute bottom-4 left-4">
                        <Text className="text-white text-lg font-semibold">
                            {featured.title}
                        </Text>
                        <Text className="text-white/80 text-sm">
                            {featured.songs}
                        </Text>
                    </View>
                </View>
            </View>

            {/* BOTTOM PLAYLISTS */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mt-8 pl-6"
            >
                {playlists.map((item) => (
                    <View
                        key={`bottom-${item.id}`}
                        className="mr-5 w-44 bg-sky-100 rounded-3xl p-4 shadow-md"
                    >
                        <View className="h-36 rounded-2xl overflow-hidden">
                            <Image
                                source={{ uri: item.image }}
                                className="w-full h-full"
                            />
                        </View>

                        <Text className="mt-4 text-sm font-semibold text-sky-900">
                            {item.title}
                        </Text>
                        <Text className="text-xs text-sky-600">
                            {item.songs}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}
