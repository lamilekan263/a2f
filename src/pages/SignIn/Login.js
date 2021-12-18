import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useHistory } from "react-router";

import Logo from "../../assets/img/logo.png";
import SEO from "../../components/Seo";

const Login = () => {
  const [isMetamaskLoading, setIsMetamaskLoading] = useState(false);

  const [isWalletLoading, setIsWalletLoading] = useState(false);

  const { isAuthenticated, authenticate } = useMoralis();

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.goBack();
    }
  }, [isAuthenticated,history]);

  // authenticate metamask
  const authenticateUserMetamask = async () => {

    try {
       setIsMetamaskLoading(true);

       await authenticate({
         signingMessage: "Welcome to A2ZFin!",
       });

       if (isAuthenticated) {
         history.goBack();
         setIsMetamaskLoading(false);
       }
    } catch (error) {
     
      setIsMetamaskLoading(false);
    }
   

    
  };

  //   authenticate wallet
  const authenticateUserWallet = async () => {

    try {
      setIsWalletLoading(true);

      await authenticate({
        provider: "walletconnect",
        signingMessage: "Welcome to A2ZFin!",
      });

      if (isAuthenticated) {
        history.goBack();
        setIsWalletLoading(false);
      }
      
    } catch (error) {
     
       setIsWalletLoading(false);
    }
    
   
  };
  return (
    <>
      <SEO title="Login" />
      <div className="bg-primary h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto  w-auto h-32" src={Logo} alt="a2zfin Logo" />
            <h2 className="mt-6  text-3xl font-extrabold text-gray-300">
              Hello,
            </h2>
            <h2 className="mt-0 text-3xl font-extrabold text-gray-300">
              Welcome back
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <div className="sm:hidden lg:block">
              <button
                onClick={authenticateUserMetamask}
                type="submit"
                className="w-full hidden lg:block justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
               
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                {isMetamaskLoading ? "Loading..." : "Connect Metamask"}
              </button>
            </div>
            <button
              onClick={authenticateUserWallet}
              type="submit"
              className="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              {isWalletLoading ? "Loading..." : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
