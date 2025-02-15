import React from 'react'
import Search from './Search'
import { Link, useLocation } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import useMobile from '../hooks/useMobile'

const Header = () => {
  const isMobile  = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  return (
    <header>
      <div className="flex w-full flex-col h-28  justify-center lg:h-20 gap-1  shadow-md items-center sticky top-0  ">
        {
          !(isSearchPage && isMobile) && (
            <div className="container mx-auto items-center justify-between max-sm:px-3  w-full flex  ">
              {/* logo */}
              <Link to={"/"} className="flex sm:text-4xl text-3xl font-bold font-display">
                <span className="text-secondary">Hut</span>
                <span className="text-primary">Bazaar</span>
              </Link>
              {/* search box */}
              <div className=" hidden  lg:flex">
                <Search />
              </div>
              {/* login and cart box */}
              <div className="flex lg:hidden">
                <button className="text-3xl text-neutral-600">
                  <FaRegUserCircle />
                </button>
              </div>
              <div className="hidden lg:flex gap-3 items-center">
                Login and cart box
              </div>

            </div>
          )
        }

        <div className="container mx-auto  items-center px-3 lg:hidden ">
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header
