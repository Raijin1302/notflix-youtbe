import { withMethods } from "@/lib/api-middlewares/with-method"
import { db } from "@/lib/db"
import serverAuth from "@/lib/serverAuth"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await serverAuth(req)
    const movieCount = await db.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)
    const randomMovies = await db.movie.findMany({
      take: 1,
      skip: randomIndex,
    })
    return res.status(200).json(randomMovies[0])
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

export default withMethods(["GET"], handler)
