import { Button } from "../ui/button"
import { Text } from "../ui/text"

export const LyricsButton = () => {
  return (
   <Button variant={"outline"} className="mt-10 self-center px-6 py-2 bg-sky-100 rounded-full shadow-md shadow-sky-300 border-0">
    <Text>See All Lyrics</Text>
   </Button>
  )
}
