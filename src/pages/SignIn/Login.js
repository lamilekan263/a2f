import React, { useState, useContext } from "react";
import { useMoralis } from "react-moralis";
import { useHistory } from "react-router";

import Logo from "../../assets/img/logo.jpg";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [isLoading, setIsloading] = useState(false);

  const { authenticate } = useMoralis();

  const { setUserAuth } = useContext(UserContext);

  const history = useHistory();
  const authenticateUserWallet = async () => {
    setIsloading(true);
    
   await authenticate({
      signingMessage: "Welcome to A2ZFin!",
    });

    setUserAuth(true);
    history.push("/app/portfolio");
   
    setIsloading(false);
  };
  return (
    <>
      <div className="bg-primary h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto  w-auto" src={Logo} alt="a2zfin Logo" />
            <h2 className="mt-6  text-3xl font-extrabold text-gray-300">
              Hello,
            </h2>
            <h2 className="mt-0 text-3xl font-extrabold text-gray-300">
              Welcome back
            </h2>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Connect Metamask
            </button>
            <button
              onClick={authenticateUserWallet}
              type="submit"
              className="mt-2  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              {isLoading ? "Loading..." : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
