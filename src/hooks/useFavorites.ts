import fetcher from "@/lib/fetcher"
import useSWR from "swr"

const useFavorties = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}

export default useFavorties
