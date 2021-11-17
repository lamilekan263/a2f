import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import {
 
  BellIcon,
  MenuIcon,
 
} from "../icons";
import {

  Dropdown,
  DropdownItem,
  // WindmillContext,
} from "@windmill/react-ui";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../context/auth";
// import { logout } from "../store/slices/auth";
// import { useDispatch, useSelector } from "react-redux";

function Header() {
  //const { authTokens, setAuthTokens } = useAuth();
  // const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  // const history = useHistory();

  // const { admin } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  // function handleProfileClick() {
  //   setIsProfileMenuOpen(!isProfileMenuOpen);
  // }
  // const logOut = async () => {
  //   dispatch(logout())
  //     .unwrap()
  //     .then(() => history.push("/login"))
  //     .catch();
  // };

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
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <h1 className="font-thin">A2ZFIN</h1>
        </div>
        <div className="flex justify-center flex-1 lg:mr-32"></div>

        <ul className="flex items-center justify-end flex-shrink-0 space-x-6">
          {/* <!--  toggler --> */}
          <li className="flex">Olalekan</li>
          
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-pink"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Top up Notification</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Traded BTC - USDT</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Funded Naira wallet - ₦5.00</span>
              </DropdownItem>
            </Dropdown>
          </li>
         
        </ul>
      </div>
    </header>
  );
}

export default Header;
