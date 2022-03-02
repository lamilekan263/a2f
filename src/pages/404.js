import React from "react";
import { useHistory } from "react-router-dom";
import SEO from "../components/Seo";

function Page404() {

  const history = useHistory()

  
  return (
    <>
      <SEO title="404" />
      <div className="w-full flex flex-col items-center  px-3">
        <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
          404
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Page not found. Check the address or{" "}
          <button
            layout="texted"
            className="text-pink-600 hover:underline dark:text-pink-300"
            onClick={() => history.goBack()}
          >
            go back
          </button>
          .
        </p>
      </div>
    </>
  );
}

export default Page404;
