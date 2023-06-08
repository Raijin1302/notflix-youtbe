import { FC } from "react"
import { isEmpty } from "lodash"
import LgHeading from "./ui/LgHeading"
import MovieCard from "./MovieCard"
import { MovieInterface } from "@/types/movies"

interface MovieListProps {
  data: MovieInterface[]
  title: string
}

const MovieList: FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <LgHeading size="xs" className="text-white font-semibold">
          {title}
        </LgHeading>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
