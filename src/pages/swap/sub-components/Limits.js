import React from "react";
import { useMoralis } from "react-moralis";
import { Label, Input, Select, Button } from "@windmill/react-ui";
import WalletIcon from "../../../components/icons/WalletIcon";
import { Link } from "react-router-dom";

const Limits = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div className="w-full lg:w-3/5 mx-auto text-gray-500">
      <div>
        <h1 className="text-center mt-2 ">You Pay </h1>
        <Label className="mt-3">
          <span className="mb-2 text-gray-500">Wrapped Ether</span>
          <Select className="mt-1 py-3 px-3">
            <option>BNB</option>
            <option>ETH</option>
            <option>BTC</option>
          </Select>
        </Label>
        <Label className="mt-3">
          <span className="mb-2 text-gray-500">$123</span>
          <Input className="mt-1 py-3 px-3" />
        </Label>
        <Label className="mt-3">
          <span className="mb-2 text-gray-500">Price Lock</span>
          <Input className="mt-1 py-3 px-3" />
        </Label>
        <Label className="mt-3">
          <span className="mb-2 text-gray-500">Expires in</span>
          <Select className="mt-1 py-3 px-3">
            <option>1Day</option>
            <option>5Day</option>
            <option>7Day</option>
            <option>20Day</option>
            <option>1Month</option>
            <option>2Month</option>
          </Select>
        </Label>
      </div>
      <div>
        <h1 className="text-center mt-2">You Receive </h1>
        <Label className="mt-3">
          <span className="mb-2 text-gray-500">Wrapped Ether</span>
          <Select className="mt-1 py-3 px-3">
            <option>BNB</option>
            <option>ETH</option>
            <option>BTC</option>
          </Select>
        </Label>
        <Label className="mt-3">
          <span className="mb-2 text-gray-500">$$3428534</span>
          <Input className="mt-1 py-3 px-3" />
        </Label>
      </div>
      <div className="my-2">
        <p className="text-xs">1 WETH cost~$2,8452,848.5330767 DAI</p>
        <p className="text-xs">1 DAI cost~$10.0003514 ETH</p>
        <p className="text-xs">Transaction Cost~ $43.430.0152 Ξ</p>
      </div>
      {isAuthenticated ? (
        <Button className="w-full my-3 bg-primary hover:bg-blue-900">
          Pay
        </Button>
      ) : (
        <Link to="/login">
          <button
            iconLeft={WalletIcon}
           className="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
            Connect Wallet
          </button>
        </Link>
      )}
    </div>
  );
};

export default Limits;
