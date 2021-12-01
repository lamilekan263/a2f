import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster

const BridgePage = lazy(() => import("../pages/BridgePage"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Swap = lazy(() => import("../pages/swap/Swap"));
const Portfolio = lazy(() => import("../pages/portfolio/Index"));


const routes = [
  {
    path: "/bridge-page",
    component: BridgePage,
  },
  {
    path: "/swap",
    component: Swap,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },

  {
    path: "*",
    component: Page404,
  },

  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
