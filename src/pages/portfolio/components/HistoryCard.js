/** @format */

import React from "react";
import moralis from "moralis";

import { useMoralis } from "react-moralis";

import { Card, CardBody, Badge } from "@windmill/react-ui";
import { getEllipsisTxt } from "../../../helpers/formatters";

const HistoryCard = ({ tx }) => {
  const { account } = useMoralis();

  // todo
  
  return (
    <Card className={tx.receipt_status === "0" ? "bg-red-100" : "bg-green-100"}>
      <CardBody>
        {tx.receipt_status === "0" ? (
          <Badge type="danger" className="my-2 bg-red-200 text-white text-xs">
            {" "}
            Failed
          </Badge>
        ) : (
          <Badge
            type="success"
            className="my-2 bg-green-200 text-white text-xs"
          >
            Success
          </Badge>
        )}

        <div className="flex items-center gap-2">
          <div className="w-16 h-16 shadow-inner rounded-full flex items-center justify-center">
            <span className="   text-gray-500 font-bold ">TX</span>
          </div>
          <a
            href={`https://rinkeby.etherscan.io/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-2"
          >
            <span className="text-gray-500">{getEllipsisTxt(tx.hash, 6)}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </a>
        </div>
        {account === tx.from_address ? (
          <div>
            {" "}
            <h4 className="mt-2 text-sm font-semibold">
              To:{" "}
              <span className="text-sm text-gray-500 font-normal">
                {getEllipsisTxt(tx.to_address, 6)}
              </span>
            </h4>
          </div>
        ) : (
          <div>
            {" "}
            <h2 className="mt-2 text-sm font-semibold">
              From:{" "}
              <span className="text-sm text-gray-500 font-normal">
                {" "}
                {getEllipsisTxt(tx.from_address, 6)}
              </span>
            </h2>
          </div>
        )}
        <p className="mt-2 text-sm font-semibold">
          Value:{" "}
          <span className="text-sm text-gray-500 font-normal">
            {" "}
            {moralis.Units.FromWei(tx.value)} ether
          </span>
        </p>

        <div className="flex gap-2 my-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p className="text-sm text-gray-500">{tx.block_timestamp}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
