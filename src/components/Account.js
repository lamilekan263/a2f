import { useMoralis } from "react-moralis";
import React, { useState } from "react";
import { Button } from "baseui/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
 
} from "baseui/modal";
import { getExplorer } from "../helpers/networks";

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
  };

  return (
    <>
      {!isAuthenticated && (
        <Link to="/login"
        
          
        >
          <Button className="w-full my-3 bg-white text-primary shadow-md hover:bg-blue-900"   iconLeft={WalletIcon}>
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

          <Button
            className="flex-1 shadow-lg bg-red-800"
            onClick={logoutHandler}
          >
            Log Out
          </Button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Log Out</ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto bg-primary"
            onClick={() => {
              logout();
              closeModal();
            }}
          >
            {" "}
            Disconnect Wallet
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Account;
