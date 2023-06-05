import { withMethods } from "@/lib/api-middlewares/with-method"
import { db } from "@/lib/db"
import serverAuth from "@/lib/serverAuth"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await serverAuth(req, res)
    const movies = await db.movie.findMany()
    return res.status(200).json(movies)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

export default withMethods(["GET"], handler)
