import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route,useLocation } from "react-router-dom";


function SidebarContent() {

    const location = useLocation()
  
   const pathMatchRoute = (route) => {
     if (route === location.pathname) {
       return true;
     }
   };
 
  return (
    <div className="  text-gray-500 dark:text-gray-400 pt-5">
     

      <ul className="mt-5">
        {routes.map((route) =>
          route.isExternal ? (
            <li className="relative px-6 py-3 text-lg" key={route.name}>
              <a
                href={route.path}
                className="inline-flex text-left  items-center font-regular w-full text-sm transition-colors duration-150 hover:text-white dark:hover:text-gray-200"
               
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 h-12 bg-primary rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <i>
                  <ion-icon
                    className="nc-icon h-32"
                    name={route.icon}
                  ></ion-icon>
                </i>
                <span className="ml-4 ">{route.name}</span>
              </a>
            </li>
          ) : (
            <li className="relative px-6 py-3 text-lg" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className={
                        pathMatchRoute(route.path)
                          ? "inline-flex text-left p-2 rounded-md items-center font-regular w-full bg-white text-sm transition-colors duration-150  dark:hover:text-gray-200"
                          : "inline-flex text-left  items-center font-regular w-full text-sm transition-colors duration-150 hover:text-white dark:hover:text-gray-200"
                      }
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 h-12 bg-primary rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <i>
                  <ion-icon
                    className="nc-icon h-32"
                    name={route.icon}
                  ></ion-icon>
                </i>
                <span className="ml-4 ">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default SidebarContent;
