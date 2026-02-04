import { Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import { LibraryIcon, PlayCircleIcon, Settings, Sparkles } from "lucide-react-native";

const TAB_ICONS = {
  library: LibraryIcon,
  "now-playing": PlayCircleIcon,
  "settings": Settings,
  "popular-playlist": Sparkles,
} as const;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2F80B8",
        tabBarInactiveTintColor: "#7DB4D6",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: "#DFF1FB",
        },
        tabBarIcon: ({ color, size }) => {
          const IconComponent =
            TAB_ICONS[route.name as keyof typeof TAB_ICONS];
          if (!IconComponent) return null;
          return <Icon as={IconComponent} color={color} size={size} />;
        },
      })}
    >
      <Tabs.Screen
        name="library"
        options={{ title: "Library" }}
      />
      <Tabs.Screen
        name="now-playing"
        options={{ title: "Now Playing" }}
      />
      <Tabs.Screen
        name="popular-playlist"
        options={{ title: "Popular" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "settings" }}
      />
    </Tabs>
  );
}
