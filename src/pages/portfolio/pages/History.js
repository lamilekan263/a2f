/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import ThemedSuspense from "../../../components/ThemedSuspense";
//import useInfiniteScroll from "../../../hooks/useInfinitScroll";
import HistoryCard from "../components/HistoryCard";

const History = () => {

  const { isAuthenticated } = useMoralis();
  const { account } = useMoralisWeb3Api();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsersTransactions = useCallback(async () => {
      try {
        setIsLoading(true);
        const response = await account.getTransactions({chain:"rinkeby"});
        setData(response.result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
       
      }
  },[account]);
    
    useEffect(() => {
      if (isAuthenticated) fetchUsersTransactions();
    }, [isAuthenticated, fetchUsersTransactions]);

  console.log(data)
  
 
  
//    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
// function fetchMoreListItems() {
//   setTimeout(() => {
//     setData((prevState) => [
//       ...prevState,
//       ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
//     ]);
//     setIsFetching(false);
//   }, 2000);
// }

  if (isLoading) {
    return <ThemedSuspense />;
  }
    if (!isAuthenticated) {
        return (
            <div>
                <h1 className="h-screen flex items-center justify-center text-2xl"> Please Connect Wallet</h1>
            </div>
        )
    }
  return (
      <div className="m-3 grid lg:grid-cols-3 gap-2">
        {data && data.length === 0 ? <h1>You currently have no Transactions</h1> : null}
          
      {data && data.map((tx) => <HistoryCard key={tx.id} tx={tx} />)}
    </div>
  );
};

export default History;
