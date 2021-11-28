import React from "react";
import { Button, Input, Label, Select } from "@windmill/react-ui";
import WalletIcon from "../components/icons/WalletIcon";

const BridgePage = () => {
  return (
    <div className="h-screen flex flex-col items-center  justify-center">
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
                <span className="mb-2 text-gray-500 font-bold">From Chain</span>
                <Select className="mt-1 py-3 px-3">
                  <option>BNB</option>
                  <option>ETH</option>
                  <option>BTC</option>
                </Select>
              </Label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
                  <option>BNB</option>
                  <option>ETH</option>
                  <option>BTC</option>
                </Select>
              </Label>
            </div>
            <div>
            <Label>
  <span>Token to Bridge</span>
  <Input type="number" dir="rtl" className="mt-1 py-3 px-3" />
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

              <p className="text-red-400 text-sm">
                • Please connect your wallet to the chain you wish to bridge
                from!{" "}
              </p>
            </div>

            <Button
              iconLeft={WalletIcon}
              className="w-full mt-4 bg-primary mx-auto "
            >
              Connect Wallet
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BridgePage;


