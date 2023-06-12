import useFavorties from "@/hooks/useFavorites"
import { FC, useCallback, useMemo } from "react"
import Icons from "./Icons"
import useCurrentUser from "@/hooks/useCurrentUser"
import axios from "axios"
import { data } from "autoprefixer"
interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorties()
  const { data: currentUser, mutate: mutateUser } = useCurrentUser()

  const isFavorite = useMemo(() => {
    const listFav = currentUser?.favoriteIds || []

    return listFav.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavorites = useCallback(async () => {
    let response
    // if (isFavorite) {
    //   response = await fetch("/api/favorite", {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data: movieId }),
    //   })
    // } else {
    //   response = await fetch("/api/favorite", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(movieId),
    //   })
    // }

    // console.log(response)

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } })
    } else {
      response = await axios.post("/api/favorite", { movieId })
    }
    const updatedFavorites = await response?.data?.favoriteIds
    mutateUser({
      ...currentUser,
      favoriteIds: updatedFavorites,
    })

    mutateFavorites()
  }, [movieId, isFavorite, currentUser, mutateUser, mutateFavorites])

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      {isFavorite ? (
        <Icons.Check className="text-white " />
      ) : (
        <Icons.Plus className="text-white transition delay-150 duration-300 rotate-180" />
      )}
    </div>
  )
}

export default FavoriteButton
