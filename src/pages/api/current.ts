import { NextApiRequest, NextApiResponse } from "next"
import serverAuth from "@/lib/serverAuth"
import { withMethods } from "@/lib/api-middlewares/with-method"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method !== "GET") {
  //   return res.status(405).end()
  // }

  try {
    const { currentUser } = await serverAuth(req, res)

    return res.status(200).json(currentUser)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

export default withMethods(["GET"], handler)
