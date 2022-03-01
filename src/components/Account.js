import { useMoralis } from "react-moralis";
import React, {Fragment, useState } from "react";

import { getExplorer } from "../helpers/networks";


import { Dialog, Transition } from "@headlessui/react";
import Blockie from "./Blockie";
import { getEllipsisTxt } from "../helpers/formatters";
import Address from "./Address";
import WalletIcon from "./icons/WalletIcon";
import { Link } from "react-router-dom";

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {  isAuthenticated, logout, chainId, user } = useMoralis();

  const closeModal = () => setIsModalOpen(false);

  const logoutHandler = () => {
    logout();
    closeModal()
  };

  return (
    <>
      {!isAuthenticated && (
        <Link to="/login">
          <button
            className="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            iconLeft={WalletIcon}
          >
            Connect Wallet
          </button>
        </Link>
      )}

      {isAuthenticated && (
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => setIsModalOpen(true)}
          >
            <p style={{ marginRight: "5px" }}>
              {getEllipsisTxt(user?.attributes.ethAddress, 6)}
            </p>
            <Blockie currentWallet scale={3} />
          </button>
          
        </div>
      )}

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Log Out
                </Dialog.Title>
                <Dialog.Description>
                  <div className="mt-2">
                    <Address
                      avatar="left"
                      size={6}
                      copyable
                      style={{ fontSize: "20px" }}
                    />
                    <a
                      href={`${getExplorer(chainId)}/address/${
                        user?.attributes.ethAddress
                      }`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Explorer
                    </a>
                  </div>
                </Dialog.Description>

                <div className="mt-4 flex gap-2">
                  <button
                    className="w-full sm:w-auto"
                    layout="outline"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="nline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={logoutHandler}
                  >
                    {" "}
                    Disconnect
                  </button>
                  {/* <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button> */}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Account;
