import { withMethods } from "@/lib/api-middlewares/with-method"
import { db } from "@/lib/db"
import serverAuth from "@/lib/serverAuth"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req, res)
    const favoriteMovies = await db.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    })
    return res.status(200).json(favoriteMovies)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

export default withMethods(["GET"], handler)
