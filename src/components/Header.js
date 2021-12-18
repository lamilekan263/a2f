/** @format */

import React from "react";
import MobileSidebar from "./Sidebar/MobileSidebar";
import LogoWHite from "../assets/img/logoWhiteIcon.png"

import Account from "./Account";

function Header() {
  return (
    <header className="sticky w-full relative top-0 z-40 py-4 bg-primary  dark:bg-gray-800">
      <div className="container relative flex flex-row items-center justify-between h-full px-6 mx-auto text-white ">
        {/* <!-- Mobile hamburger --> */}

        <MobileSidebar />

        <img className="h-16 w-16 hidden lg:block" src={LogoWHite} alt="" />

        <div className="justify-self-end">
          <Account />
        </div>
      </div>
    </header>
  );
}

export default Header;
