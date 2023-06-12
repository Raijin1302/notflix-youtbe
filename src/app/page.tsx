"use client"
import Billboard from "@/components/Billboard"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"
import SignOutButton from "@/components/SignOutButton"
import useFavorties from "@/hooks/useFavorites"
import useMovieList from "@/hooks/useMovieList"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
export default function Home() {
  // const session = await getServerSession(authOptions)
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorties()
  return (
    <main>
      <>
        <Navbar />
        <Billboard />
        <div className="pb-40">
          <MovieList title="Trending Now" data={movies} />
          <MovieList title="Trending Now" data={favorites} />
        </div>
      </>
    </main>
  )
}
