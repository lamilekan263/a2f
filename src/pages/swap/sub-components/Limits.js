import React from "react";
import { Label, Input, Select, Button } from "@windmill/react-ui";

const Limits = () => {
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
      <Button className="w-full my-3 bg-primary hover:bg-blue-900">Connect Wallet</Button>
    </div>
  );
};

export default Limits;
