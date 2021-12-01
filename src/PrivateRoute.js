import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import { useMoralis } from "react-moralis";

import { UserContext } from "./context/UserContext";

function PrivateRoute({ component, ...rest }) {
  const { userAuth } = useContext(UserContext);

  let ComponentToRender = component;
  // const {  user,  isAuthenticated } =
  // useMoralis();

  return (
    <Route
      {...rest}
      render={(props) =>
        userAuth ? (
          <ComponentToRender {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login" }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;

// const UserPrivateRouteHandler = ({ component, auth, ...rest }) => {

//   let ComponentToRender = component;

//   return (
//       <Route
//           {...rest}
//           render={props =>
//            auth.user.role === "Member" ? (
//                   <ComponentToRender {...props} />
//               ) : (
//                   <Redirect
//                       to={{
//                           pathname: "/",

//                       }}
//                   />
//               )
//           }
//       />
//   );
// }
