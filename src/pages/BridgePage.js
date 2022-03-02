import React from "react";

import { useMoralis } from "react-moralis";
import {  Label, Select, Input } from "@windmill/react-ui";

// import { Input } from "baseui/input";
//import WalletIcon from "../components/icons/WalletIcon";
import SEO from "../components/Seo";
import { Link } from "react-router-dom";

const BridgePage = () => {
  const { isAuthenticated } = useMoralis();


  return (
    <>
      <SEO title="Bridge" />
      <div className="w-full p-3 h-screen flex flex-col items-center  justify-center">
        <div>
          <h1>
            {" "}
            Bridge to and from the Fantom Opera Network! Receive the same token
            that you sent!
          </h1>
          <div>
            <form>
              <div className="flex items-center gap-4">
                <Label className="mt-3 flex-1">
                  <span className="mb-2 text-gray-500 font-bold">
                    From Chain
                  </span>
                  <Select className="mt-1 py-3 px-3">
                    <option>BNB</option>
                    <option>ETH</option>
                    <option>BTC</option>
                  </Select>
                </Label>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <Label className="mt-3 flex-1">
                  <span className="mb-2 text-gray-500 font-bold">To Chain</span>
                  <Select className="mt-1 py-3 px-3">
                    <option>ETH</option>
                    <option>BNB</option>
                    <option>BTC</option>
                  </Select>
                </Label>
              </div>
              <div>
                <Label>
                  <span>Token to Bridge</span>
                  <Input
                    type="number"
                    dir="rtl"
                    className="mt-3 bg-white  py-3 px-3"
                  />
                </Label>
              </div>
              <div className="my-3">
                <p>Bridgeable Range:</p>
                <div className="flex justify-between my-2 text-xs">
                  <p>Max</p> <p>1,500,000 FONT</p>
                </div>
                <div className="flex justify-between my-2 text-xs">
                  <p>Min</p> <p>39.3 FONT</p>
                </div>
                <div className="flex justify-between my-2 text-xs">
                  <p>Fee</p> <p>0 FONT</p>
                </div>
                <p className="text-sm">
                  • Amounts greater than 300,000 FONT could take up to 12 hours
                </p>

                {!isAuthenticated && (
                  <p className="text-red-400 text-sm">
                    • Please connect your wallet to the chain you wish to bridge
                    from!{" "}
                  </p>
                )}
              </div>

              {isAuthenticated ? (
                <button  className="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                  Pay
                </button>
              ) : (
                <Link to="/login">
                  <button
                    //iconLeft={WalletIcon}
                    className="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                  
                    Connect Wallet
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BridgePage;
