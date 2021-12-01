import React from "react";

function Main({ children }) {
  return (
    <main className="h-full  ">
      <div className="  mx-auto  flex flex-row">{children}</div>
    </main>
  );
}

export default Main;
