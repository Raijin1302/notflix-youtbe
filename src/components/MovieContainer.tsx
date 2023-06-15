"use client"
import { FC } from "react"
import MovieList from "./MovieList"
import useFavorties from "@/hooks/useFavorites"
import useMovieList from "@/hooks/useMovieList"
import InfoModal from "./InfoModal"
import useInfoModal from "@/hooks/useInfoModalStore"
interface MovieContainerProps {}

const MovieContainer: FC<MovieContainerProps> = ({}) => {
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorties()
  const { isOpen, closeModal } = useInfoModal()
  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="Trending Now" data={favorites} />
    </div>
  )
}

export default MovieContainer
