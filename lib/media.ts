import * as MediaLibrary from "expo-media-library";

export async function getAudioFiles() {
  const permission = await MediaLibrary.requestPermissionsAsync();
const perm = await MediaLibrary.requestPermissionsAsync();
console.log(perm.granted);

  if (!permission.granted) {
    throw new Error("Media permission not granted");
  }

  const media = await MediaLibrary.getAssetsAsync({
    mediaType: MediaLibrary.MediaType.audio,
    first: 1000
  });

  return media.assets;
}
