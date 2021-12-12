/** @format */

import React from "react";
import MobileSidebar from "./Sidebar/MobileSidebar";

import Account from "./Account";

function Header() {
  return (
    <header className="sticky w-full relative top-0 z-40 py-4 bg-primary  dark:bg-gray-800">
      <div className="container relative flex flex-row items-center justify-between h-full px-6 mx-auto text-white ">
        {/* <!-- Mobile hamburger --> */}

        <MobileSidebar />

        <h1 className="hidden  md:block font-bold">A2ZFIN</h1>
 <div className="justify-self-end">
          <Account />
        </div> 
      </div>
    </header>
  );
}

export default Header;
