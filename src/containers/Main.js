import React from "react";

function Main({ children }) {
  return (
    <main className="h-screen ">
      <div className="flex flex-row ">{children}</div>
    </main>
  );
}

export default Main;
