// const fetcher = async (url: string) => {
//   const response = await fetch(url)
//   const data = await response.json()
//   return data
// }
import axios from "axios"

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)
export default fetcher
