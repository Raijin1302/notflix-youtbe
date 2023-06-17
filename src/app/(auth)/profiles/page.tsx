import LgHeading from "@/components/ui/LgHeading"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
const page = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect("/login")
  }
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <LgHeading className="text-white text-center">
          Who is watching ?
        </LgHeading>
        <div className="flex items-center justify-center gap-8 mt-10">
          <Link href="/">
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img src="/images/default-green.png" alt="Profile" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {session?.user?.name}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
