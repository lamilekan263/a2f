/** @format */

import React, { useEffect } from "react";
import { useMoralis, useERC20Balances } from "react-moralis";

import ThemedSuspense from "../../../components/ThemedSuspense";
import AssetCard from "../components/AssetCard";

const TokenAssets = () => {
  const { isAuthenticated } = useMoralis();
  const { fetchERC20Balances, data, isLoading, error } = useERC20Balances({
    chain: "rinkeby",
  });

  useEffect(() => {
    if (isAuthenticated) fetchERC20Balances();
  }, [isAuthenticated,fetchERC20Balances]);
  if (isLoading) {
    return <ThemedSuspense />;
  }

  return (
    <div className="p-4">
      {error && <>{JSON.stringify(error)}</>}
      {data && data.length === 0 ? (
        <div className="flex items-center justify-center">
          <h1 className="text-lg text-gray-600">You currently have no token</h1>
        </div>
      ) : null}

      <div className="grid lg:grid-cols-3 gap-2">
        {data &&
          data.map((token, id) => <AssetCard key={id} tokenAssets={token} />)}
      </div>
    </div>
  );
};

export default TokenAssets;
