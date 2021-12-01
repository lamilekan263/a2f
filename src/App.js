import React, { useEffect, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMoralis } from "react-moralis";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/SignIn/Login";
import { UserProvider } from "./context/UserContext";
const Layout = lazy(() => import("./containers/Layout"));
const Page404 = lazy(() => import("./pages/404"));

function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Switch>
      {isAuthenticated && <Redirect exact from="/" to="/app/portfolio" />}
      {!isAuthenticated && <Redirect exact from="/" to="/login" />}
      <UserProvider>
        <Route path="/login" component={Login} />
        <PrivateRoute to="/app" component={Layout} />
        <Redirect to="/login" />
      </UserProvider>

      <Route path="*" component={Page404} />
    </Switch>
  );
}

export default App;
