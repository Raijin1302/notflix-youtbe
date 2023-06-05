import Billboard from "@/components/Billboard"
import Navbar from "@/components/Navbar"
import SignOutButton from "@/components/SignOutButton"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
export default async function Home() {
  // const session = await getServerSession(authOptions)

  return (
    <main>
      <>
        <Navbar />
        <Billboard />
      </>
    </main>
  )
}
