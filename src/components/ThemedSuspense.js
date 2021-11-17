import React from "react";
// import Loader from "react-loader-spinner";

function ThemedSuspense() {
  return (
    <div className="w-full h-screen p-6 text-lg font-medium text-pink-800 dark:text-pink-500 dark:bg-gray-900">
      {/* <Loader
        type="Oval"
        height={16}
        width={16}
        className="inline-block text-pink-600"
      />{" "} */}
      Loading...
    </div>
  );
}

export default ThemedSuspense;
