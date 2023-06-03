"use client"
import useBillboard from "@/hooks/useBillboard"
import { FC } from "react"
interface BillboardProps {}

const Billboard: FC<BillboardProps> = ({}) => {
  const { data } = useBillboard()

  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
    </div>
  )
}

export default Billboard
