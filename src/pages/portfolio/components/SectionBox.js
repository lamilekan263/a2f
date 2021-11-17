import React from "react";
import {Card, CardBody, Badge } from '@windmill/react-ui'

const SectionBox = ({ title,bagdeContent}) => {
  return (
      <Card className="w full flex-1">
    <div className="m-4">
        <CardBody>
      <p className="font-thin text-gray-500">{title}</p>
      <h5 className="my-3">$0.00</h5>
      <div className="flex gap-3 mb-2">
        <img
          src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
          alt="eth_logo"
          
          className="mr-1"
        />
        <span>0</span>
      </div>
      <Badge className="px-3 py-2 bg-secondary">0 {bagdeContent}</Badge>
      </CardBody>
    </div>
    </Card>
  );
};

export default SectionBox;
