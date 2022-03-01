/** @format */

import React from "react";
import { Tab } from "@headlessui/react";
import SEO from "../../../components/Seo";
import TokenAssets from "../pages/TokenAssets";
import NftAssets from "../pages/NftAssets";

import GobackButton from "../../../components/GobackButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AssetsPage = () => {

  return (
    <>
      <SEO title="Port-Folio" />
      <div className="container  py-7 sm:px-0">
     <GobackButton />
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
