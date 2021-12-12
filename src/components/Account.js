import { useMoralis } from "react-moralis";
import React, {Fragment, useState } from "react";

import { getExplorer } from "../helpers/networks";
import {
  // Modal,
  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  Button,
} from "@windmill/react-ui";

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
          <Button
            className="w-full my-3 bg-white text-primary shadow-md hover:bg-blue-900"
            iconLeft={WalletIcon}
          >
            Connect Wallet
          </Button>
        </Link>
      )}

      {isAuthenticated && (
        <div className="flex flex-row gap-2">
          <Button
            className="flex-1 shadow-lg bg-red-800"
            onClick={() => setIsModalOpen(true)}
          >
            <p style={{ marginRight: "5px" }}>
              {getEllipsisTxt(user?.attributes.ethAddress, 6)}
            </p>
            <Blockie currentWallet scale={3} />
          </Button>
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
                  <Button
                    className="w-full sm:w-auto"
                    layout="outline"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="w-full sm:w-auto bg-primary"
                    onClick={logoutHandler}
                  >
                    {" "}
                    Disconnect Wallet
                  </Button>
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
