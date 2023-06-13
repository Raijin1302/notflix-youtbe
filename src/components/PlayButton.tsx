import { FC } from "react"
import Icons from "./Icons"
import { useRouter } from "next/navigation"
interface PlayButtonProps {
  movieId: string
}

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition delay-150 cursor-pointer"
    >
      <Icons.Play className="w-6 mr-1" />
      Play
    </div>
  )
}

export default PlayButton
