import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const page = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect("/login")
  } else {
    return <div className="text-white">Profiles</div>
  }
}

export default page
