import { useEffect } from "react";
import { Text } from "react-native";
import { getAudioFiles } from "@/lib/media";

export default function TestScreen() {
  useEffect(() => {
    getAudioFiles().then(files => {
      console.log("Audio files:", files.length);
    });
  }, []);

  return <Text>Check console</Text>;
}
