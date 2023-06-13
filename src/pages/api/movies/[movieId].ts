import { withMethods } from "@/lib/api-middlewares/with-method"
import { db } from "@/lib/db"
import serverAuth from "@/lib/serverAuth"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await serverAuth(req, res)

    const { movieId } = req.query
    if (typeof movieId !== "string") {
      throw new Error("Invalid ID")
    }

    if (!movieId) {
      throw new Error("Can't find ID")
    }

    const movie = await db.movie.findUnique({
      where: {
        id: movieId,
      },
    })

    return res.status(200).json(movie)
  } catch (error) {}
}

export default withMethods(["GET"], handler)
