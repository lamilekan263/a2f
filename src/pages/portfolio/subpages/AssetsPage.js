import React from "react";
// import moralis from "moralis"
import { Tab } from "@headlessui/react";

import SEO from "../../../components/Seo";
import TokenAssets from "../sub-components/TokenAssets";
import NftAssets from "../sub-components/NftAssets";
import { useHistory } from "react-router";

// import ThemedSuspense from '../../components/ThemedSuspense'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AssetsPage = () => {
  //   const [ allErcBalance, setGetAllErcBalance] = React.useState(null)

  //   const [ isLoading, setIsLoading ] = React.useState(false)

  //   const getAllErcz20 = async () => {
  //     setIsLoading(true)
  //     const response = await  moralis.Web3.getAllERC20();

  //     if(response){
  //       setIsLoading(false);
  //       setGetAllErcBalance(response)
  //     }

  //   }

  //   React.useEffect(() =>{
  //     getAllErcz20()
  //   },[])

  //   if(isLoading) {
  //     return(
  //       <ThemedSuspense/>
  //     )
  //   }

  const history = useHistory();
  return (
    <>
      <SEO title="Port-Folio" />
      <div className="container  py-7 sm:px-0">
          <div className="flex  gap-2" onClick={() => history.goBack()}>
        <svg
          
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mb-3 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <span>go back</span>
        </div>
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium  rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-primary text-white shadow"
                    : "text-blue-700 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Token Assets
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium  rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-primary text-white shadow"
                    : "text-blue-700 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              NFT Assets
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <TokenAssets />
            </Tab.Panel>
            <Tab.Panel>
              <NftAssets />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default AssetsPage;
