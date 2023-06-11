import useFavorties from "@/hooks/useFavorites"
import { FC, useCallback, useMemo } from "react"
import Icons from "./Icons"
interface FavoriteButtonProps {
  movieID: string
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieID }) => {
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icons.Plus className="text-white" />
    </div>
  )
}

export default FavoriteButton
