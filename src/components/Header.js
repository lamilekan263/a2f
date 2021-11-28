import { Button } from "@windmill/react-ui";
import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import WalletIcon from "./icons/WalletIcon";


function Header() {
  
  const { toggleSidebar } = useContext(SidebarContext);

 
  return (
    <header className="z-40 py-4 bg-primary  dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-white dark:text-pink-300">
        {/* <!-- Mobile hamburger --> */}
        <div className="flex items-center gap-2">
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-blue"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </span>
          </button>
          <h1 className="font-thin">A2ZFIN</h1>
        </div>
        <div className="flex justify-center flex-1 lg:mr-32"></div>

        <ul className="flex items-center justify-end flex-shrink-0 space-x-6">
          {/* <!--  toggler --> */}
          <li className="flex">$1.4567849900</li>

          {/* <!-- Notifications menu --> */}
          <li className="relative">

          <Button
              iconLeft={WalletIcon}
              className="w-full   mx-auto "
            >
              Connect Wallet
            </Button>

            

         
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
