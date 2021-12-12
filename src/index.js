import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";



// import { BaseProvider } from "baseui";

const APP_ID = "ZhBYTouGDPVru1uSqznsuQ2CN3WsBIjTCJX5KKWO";
const SERVER_URL = "https://ogglzj6p7kxj.usemoralis.com:2053/server";

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Hello world</h1>
      </div>
    );
  }
};
const engine = new Styletron();
ReactDOM.render(
  // <StyletronProvider value={engine}>
  <BrowserRouter>
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
      
          <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
              <Application />
            </BaseProvider>
          </StyletronProvider>
       
      </Suspense>
    </SidebarProvider>
  </BrowserRouter>,
  // </StyletronProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
