import React from "react";
import {  Card, CardBody } from "@windmill/react-ui";

const AssetCard = ({ tokenAssets }) => {
  return (
    <Card className>
      <CardBody>
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 shadow-inner rounded-full flex items-center justify-center">
            <span className="   text-gray-500 font-bold ">{tokenAssets.symbol}</span>
          </div>
          <h2 className="text-sm">{tokenAssets.name}</h2>
        </div>
        <h2 className="mt-2">
          Balance: <span className="text-sm text-gray-500">{tokenAssets.balance}</span>
        </h2>
      </CardBody>
    </Card>
  );
};

export default AssetCard;
