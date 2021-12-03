import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useHistory } from "react-router";

import Logo from "../../assets/img/logo.jpg";
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
    setIsMetamaskLoading(true);

    await authenticate({
      signingMessage: "Welcome to A2ZFin!",
    });

    if (isAuthenticated) {
      history.goBack();
      setIsMetamaskLoading(false);
    }

    setIsMetamaskLoading(false);
  };

  //   authenticate wallet
  const authenticateUserWallet = async () => {
    setIsWalletLoading(true);

    await authenticate({
      provider: "walletconnect",
      signingMessage: "Welcome to A2ZFin!",
    });

    if (isAuthenticated) {
      history.goBack();
      setIsWalletLoading(false);
    }
    setIsWalletLoading(false);
  };
  return (
    <>
      <SEO title="Login" />
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
            <div className="sm:hidden lg:block">
              <button
                onClick={authenticateUserMetamask}
                type="submit"
                className="group relative w-full flex  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                {isMetamaskLoading ? "Loading..." : "Connect Metamask"}
              </button>
            </div>
            <button
              onClick={authenticateUserWallet}
              type="submit"
              className="mt-2  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
