import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Icon } from "@/components/ui/icon";
import { Text } from '@/components/ui/text';
import { MoonStarIcon, SunIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <SafeAreaView className="flex-1 px-4 py-8 bg-[#badcee]">
            <Card className="w-full max-w-sm">
                <CardHeader className="flex-row">
                    <View className="flex-1 gap-1.5">
                        <CardTitle>Welcome to Pie Verse</CardTitle>
                        <CardDescription>A place for you and your partner</CardDescription>
                    </View>
                </CardHeader>
                <CardContent>
                    <Button className="w-fit"
                        onPress={toggleColorScheme}
                    >
                        <Text>Toggle Theme</Text>
                        <Icon
                            as={colorScheme === "dark" ? SunIcon : MoonStarIcon}
                            className="size-7 text-background"
                        />
                    </Button>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Text variant={"muted"}>
                        made with ❤️ for pie
                    </Text>
                </CardFooter>
            </Card>
        </SafeAreaView>
    );
}
