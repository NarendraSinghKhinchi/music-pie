import { Tabs } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { LibraryIcon, PlayCircleIcon } from "lucide-react-native";

const TAB_ICONS = {
  library: LibraryIcon,
  "now-playing": PlayCircleIcon,
} as const;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FF8559",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 60,
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
    </Tabs>
  );
}
