import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { db } from "./db"
import { authOptions } from "./auth"

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session?.user?.email) {
    throw new Error("Not signed in")
  }
  const currentUser = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!currentUser) {
    throw new Error("Not signed in")
  }

  return { currentUser }
}

export default serverAuth
