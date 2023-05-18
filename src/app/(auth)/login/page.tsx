"use client"
import Input from "@/components/Input"
import { FC, useState } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-70 px-16 py-16  mt-2 lg:w-2/5 lg:max-w-md w-full-">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in </h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Input
                label="Username"
                id="username"
                type="username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
