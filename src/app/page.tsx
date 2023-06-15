import Billboard from "@/components/Billboard"
import MovieContainer from "@/components/MovieContainer"
import Navbar from "@/components/Navbar"
import SignOutButton from "@/components/SignOutButton"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
const page = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null
  }
  return (
    <main>
      <>
        <Navbar />
        <Billboard />
        <div className="pb-40">
          <MovieContainer />
        </div>
      </>
    </main>
  )
}

export default page
