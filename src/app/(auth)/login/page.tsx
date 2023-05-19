"use client"
import Input from "@/components/Input"
import { FC, useCallback, useState } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [variant, setVariant] = useState("login")
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    )
  }, [])
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-lg rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Create an account"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="username"
                  type="username"
                  value={username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                />
              )}
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
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <button className=" bg-red-600 py-3 text-white rounded-md mt-10 hover:bg-red-700 transition w-full">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Notflix ?"
                : "Already have an account ?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
