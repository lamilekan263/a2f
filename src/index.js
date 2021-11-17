import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import reportWebVitals from './reportWebVitals';





import { Windmill } from "@windmill/react-ui";

// import { BaseProvider } from "baseui";


ReactDOM.render(

    // <StyletronProvider value={engine}>
    <BrowserRouter>
      <SidebarProvider>
        <Suspense fallback={<ThemedSuspense />}>
          <Windmill usePreferences light >
            <App />
          </Windmill>
        </Suspense>
      </SidebarProvider>
      </BrowserRouter>
    // </StyletronProvider>,
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
