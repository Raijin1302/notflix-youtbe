"use client"
import { FC, useCallback, useEffect, useState } from "react"
import NavbarItem from "./NavbarItem"
import MobileMenu from "./MobileMenu"
import AccountMenu from "./AccountMenu"

interface NavbarProps {}
const TOP_OFFSET = 66
const Navbar: FC<NavbarProps> = ({}) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false)
  const [scrollBG, setScrollBG] = useState<boolean>(false)
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setScrollBG(true)
      } else {
        setScrollBG(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex items-center transition duration-500 ${
          scrollBG ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex ml-auto gap-7 items-center">
          <div className="icon__place text-gray-200 hover:text-gray-300 cursor-pointer">
            {/* Logo here */}
            Search
          </div>
          <div className="icon__place text-gray-200 hover:text-gray-300 cursor-pointer">
            {/* Logo here */}
            Bell
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-green.png" alt="Logo" />
            </div>
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
