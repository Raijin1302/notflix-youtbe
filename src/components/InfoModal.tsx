"use client"
import useMovie from "@/hooks/useMovie"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import Icons from "./Icons"
import PlayButton from "./PlayButton"
import FavoriteButton from "./FavoriteButton"
import useInfoModalStore from "@/hooks/useInfoModalStore"

interface InfoModalProps {
  visible?: boolean
  onClose: any
}

const InfoModal: FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible)

  const { movieId } = useInfoModalStore()
  const { data } = useMovie(movieId)
  console.log(data, movieId)

  useEffect(() => {
    setIsVisible(!!visible)
  }, [visible])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    })
  }, [onClose])

  if (!visible) {
    return null
  }
  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-105" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              className="w-full brightness-[60%] object-cover h-full"
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-4 right-7 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <Icons.X className="text-white hover:animate-spin" />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <div className="flex gap-5">
              <p className="text-green-400 font-semibold text-lg">New</p>
              <p className="text-white text-lg">{data?.duration}</p>
            </div>
            <p className="text-white text-lg font-bold">{data?.genre}</p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
