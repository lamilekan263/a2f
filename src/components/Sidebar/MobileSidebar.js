/** @format */

import React from "react";
import routes from "../../routes/sidebar";

import { Popover, Transition } from "@headlessui/react";

import { Link } from "react-router-dom";

function MobileSidebar() {
  return (
    <div className="w-56 relative">
      <div className="w-full  inset-x-0 top-0 lg:hidden">
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                className="
                text-black group bg-orange-700  px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <svg
                  className="h-6 w-6 fill-current text-white "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Popover.Button>
              <Transition
                as={"div"}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              ></Transition>
              <Popover.Panel className="absolute bg-primary   top-12 z-10 w-full bg-white   mt-3 mx-auto   sm:px-0 lg:max-w-3xl shadow-md">
                {routes.map((route) => {
                  return route.isExternal ? (
                    <a
                      href={route.path}
                      key={route.name}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center p-2 m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <i>
                        <ion-icon
                          className="nc-icon"
                          name={route.icon}
                        ></ion-icon>
                      </i>
                      <h1 className="px-3 text-xs text-white font-thin">
                        {route.name}
                      </h1>
                    </a>
                  ) : (
                    <Popover.Button
                      as={Link}
                      key={route.name}
                      to={route.path}
                      className="flex items-center p-2 m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <i>
                        <ion-icon
                          className="nc-icon"
                          name={route.icon}
                        ></ion-icon>
                      </i>
                      <h1 className="px-3 text-xs text-white font-thin">
                        {route.name}
                      </h1>
                    </Popover.Button>
                  );
                })}
                {/* next */}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}

export default MobileSidebar;
