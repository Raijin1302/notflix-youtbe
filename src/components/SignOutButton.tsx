"use client"
import { FC, useState } from "react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const signOutUser = async () => {
    setIsLoading(true)

    try {
      await signOut()
      router.push("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button className="h-10 w-full bg-white" onClick={signOutUser}>
      Sign Out
    </button>
  )
}

export default SignOutButton
