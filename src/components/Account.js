import { useMoralis } from "react-moralis";
import React, { useState } from "react";

import { getExplorer } from "../helpers/networks";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";
import Blockie from "./Blockie";
import { getEllipsisTxt } from "../helpers/formatters";
import Address from "./Address";
import { useHistory } from "react-router";

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {  logout, chainId, user } = useMoralis();

  const closeModal = () => setIsModalOpen(false);

  // const [ user, setUser ] = useState(null);
  const history = useHistory();
  const logoutHandler = () =>{
    logout()
    history.push("/login")
  }
 
  
  return (
    <>
      <Button
        className="shadow-lg bg-red-800"
        onClick={() => setIsModalOpen(true)}
      >
        <p style={{ marginRight: "5px" }}>{getEllipsisTxt(user?.attributes.ethAddress, 6)}</p>
        <Blockie currentWallet scale={3} />
      </Button>

      <Button
        className="shadow-lg bg-red-800"
        onClick={logoutHandler}
      >
        Log Out
      </Button>

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
            href={`${getExplorer(chainId)}/address/${user?.attributes.ethAddress}`}
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
