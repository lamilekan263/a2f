import React from "react";
//import { useHistory } from "react-router-dom";



function Page404() {
  // const history = useHistory();
  // const goBack = () => {
  //   history.goBack();
  // };
  return (
    <div className="flex flex-col items-center">
      {/* <ForbiddenIcon
        className="w-12 h-12 mt-8 text-pink-200"
        aria-hidden="true"
      /> */}
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{" "}
        <button
          layout="texted"
          className="text-pink-600 hover:underline dark:text-pink-300"
          // onClick={() => goBack()}
        >
          go back
        </button>
        .
      </p>
    </div>
  );
}

export default Page404;
