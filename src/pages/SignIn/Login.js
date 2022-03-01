import React, { useState, useEffect } from "react";
import gsap from 'gsap'
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
  }, [isAuthenticated, history]);
  
  // animating the page

  useEffect(() => {      
    const tl = gsap.timeline();
   
    tl.fromTo('#ball2', { x: -200 }, { x: 0, duration: 1 })
     tl.fromTo('#ball1', { scale: -0 }, { scale: 1, duration: 1 })
    tl.fromTo('#ball3', { x: -400 }, { x: 0, duration: 1 })
   
    tl.fromTo("#button1", { scale: 0 }, { scale: 1 , ease:"elastic.out(1,0.4)", duration:1.5});
    tl.fromTo("#button2", {opacity: 0 ,x: 100, }, { opacity:1, x: 0 }, "<50%");
  }, []);

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
        <div className="max-w-md w-full space-y-8 overflow-hidden">
          <div>
            <img id="ball1" className="mx-auto  w-auto h-32" src={Logo} alt="a2zfin Logo" />
            <h2 id="ball2" className="mt-6  text-3xl font-extrabold text-gray-300">
              Hello,
            </h2>
            <h2 id="ball3" className="mt-0 text-3xl font-extrabold text-gray-300">
              Welcome back
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <div className="sm:hidden lg:block">
              <button
                id="button1"
                onClick={authenticateUserMetamask}
                type="submit"
                className="w-full hidden lg:block justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
               
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                {isMetamaskLoading ? "Loading..." : "Connect Metamask"}
              </button>
            </div>
            <button
              id="button2"
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
