import Billboard from "@/components/Billboard"
import Navbar from "@/components/Navbar"
import SignOutButton from "@/components/SignOutButton"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1 className="text-3xl text-red-700">Notflix Clone</h1>
      {session ? (
        <>
          <SignOutButton />
          <p className="text-green-700">
            Logged in as : {session?.user?.email}
          </p>
          <Navbar />
          <Billboard />
        </>
      ) : (
        <p className="text-green-400">Nothing in here</p>
      )}
    </main>
  )
}
