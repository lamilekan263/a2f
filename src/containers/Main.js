import React from "react";

function Main({ children }) {
  return (
    <main className="min-h-full h-full bg-gray-100 ">
      <div className="container px-4 mx-auto ">{children}</div>
    </main>
  );
}

export default Main;
