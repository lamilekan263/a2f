import React, { useEffect,useCallback } from "react";
import {useMoralis} from "react-moralis"
import { Card, Button, CardBody, Badge } from "@windmill/react-ui";

const SectionBox = ({ title, bagdeContent, totalErc20 }) => {

  const { isAuthenticated } = useMoralis();

  const getBalance = useCallback(() => {
    if(totalErc20 && isAuthenticated ){
      return totalErc20
    }
  },[totalErc20,isAuthenticated])
  

  useEffect(() => {
    getBalance()
  },[isAuthenticated,getBalance])
  return (
    <Card className="w full flex-1 shadow-lg">
      <div className="m-4">
        <CardBody>
          <p className="font-thin text-gray-500">{title}</p>
          <h5 className="my-3">${totalErc20 ? totalErc20[0].balance : "0"}</h5>
          <Badge className="px-3 py-2 bg-secondary">
            {totalErc20 ? totalErc20.length : "0"} {bagdeContent}
          </Badge>
          <div className="mt-3 flex gap-3">
            <Button className="w-32">Send</Button>
            <Button className="w-32">Receive</Button>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default SectionBox;
