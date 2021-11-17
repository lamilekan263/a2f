import React, { lazy,  } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const Layout = lazy(() => import("./containers/Layout"));
const Page404 = lazy(() => import("./pages/404"));

function App() {
  return (
    
   
    <Switch>
      <Redirect exact from="/" to="/app/portfolio" />
      <Layout />
      <Route path="*" element={Page404} />
    </Switch>

  );
}

export default App;
