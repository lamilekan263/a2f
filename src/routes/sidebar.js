import homeIcon from "../assets/img/menuIcon/home.svg";
import giftIcon from "../assets/img/menuIcon/gift.svg";
import cardIcon from "../assets/img/menuIcon/card.svg";
import walletIcon from "../assets/img/menuIcon/wallet.svg";
import merchantIcon from "../assets/img/menuIcon/merchant.svg";
import referralIcon from "../assets/img/menuIcon/referral.svg";
import billIcon from "../assets/img/menuIcon/bill.svg";
import swapIcon from "../assets/img/menuIcon/swap.svg";

const routes = [
  {
    path: "https://a2zdv.netlify.app/", // the url
    icon: "people-outline", // the component being exported from icons/index.js
    color: "",
    name: "P2P", 
    isExternal: true,// name that appear in Sidebar
  },
  {
    path: "/app/portfolio",
    icon: "briefcase-outline",
    color: "",
    name: "Portfolio",
  },
  {
    path: "/app/swap", // the url
    icon: "swap-vertical-outline", // the component being exported from icons/index.js
    color: "",
    name: "Swap", // name that appear in Sidebar
  },
  {
    path: "/app/pools",
    icon: "business-outline",
    color: "",
    name: "Lend/Borrow pools",
  },
  
  {
    path: "/app/savings", // the url
    icon: "wallet-outline", // the component being exported from icons/index.js
    color: "",
    name: "Savings", // name that appear in Sidebar
  },
  {
    path: "/app/bridge-page",
    icon: "rocket-outline",
    color: "",
    name: "Bridge",
  },
  
  

];

export default routes;
