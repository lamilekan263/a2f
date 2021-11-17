import React from "react";
import { Label,  Select, } from "@windmill/react-ui";

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default BridgePage;
