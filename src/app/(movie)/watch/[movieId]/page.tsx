"use client"
import Icons from "@/components/Icons"
import useMovie from "@/hooks/useMovie"
import { FC } from "react"
interface pageProps {
  params: any
}

const page: FC<pageProps> = ({ params }) => {
  //   const { data } = useMovie(movieId as string)
  const { movieId } = params

  const { data } = useMovie(movieId)
  console.log(data, movieId)

  return (
    <div className="h-screen w-screen bg-black ">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <Icons.ChevronLeft className="text-white w-10" />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching : </span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        src={data?.videoURL}
        className="w-full h-full"
      ></video>
    </div>
  )
}

export default page
