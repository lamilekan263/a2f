import React, { useEffect,useCallback } from "react";
import {useMoralis, useMoralisWeb3Api } from "react-moralis"
import { Card,  CardBody, Badge } from "@windmill/react-ui";

const SectionBox = ({ title, bagdeContent, totalErc20 }) => {

  const { isAuthenticated } = useMoralis();

  const getBalance = useCallback(() => {
    if(totalErc20 && isAuthenticated ){
      return totalErc20
    }
  }, [totalErc20, isAuthenticated])
  

  const  account = useMoralisWeb3Api();
  
console.log(account)
  useEffect(() => {
    getBalance()
  }, [isAuthenticated, getBalance])
  
  console.log(totalErc20);
  return (
    <Card className="w full flex-1 shadow-lg">
      <div className="m-4">
        <CardBody>
          <p className="font-thin text-gray-500">{title}</p>
          {/* <h5 className="my-3">${totalErc20 ? totalErc20[0].balance : "0"}</h5> */}
          <Badge type="neutral" className="px-3 py-2">
            {totalErc20 ? totalErc20.length : "0"} {bagdeContent}
          </Badge>
          <div className="mt-3 flex gap-3">
             <button
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            
          >
            Send
            </button>
             <button
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            
          >
            Receive
          </button>
            
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

SectionBox.defaultProps = {
  totalErc20: 0
}

export default SectionBox;
