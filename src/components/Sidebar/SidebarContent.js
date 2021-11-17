import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
//import * as menuIcons from '../../icons/menuIcons'
import SidebarSubmenu from "./SidebarSubmenu";
//import { Button } from '@windmill/react-ui'
//import { Send } from 'react-feather';
//import { IoWalletOutline } from "react-icons/io5";
import Logo from "../Logo";
//import { useAuth } from "../../context/auth";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  //const { authTokens } = useAuth();
  //console.log(menuIcons)
  return (
    <div className="text-gray-500 dark:text-gray-400 pt-5">
      <a className="" href="/app/overview">
        <Logo />
      </a>

      <ul className="mt-3">
        {routes.map((route) =>
          
           route.isExternal ? ( <li className="relative px-6 py-3 text-lg" key={route.name}>
           <a
        
             href={route.path}
             className="inline-flex text-left items-center font-regular w-full text-sm transition-colors duration-150 hover:text-white dark:hover:text-gray-200"
             activeclassName="text-green-500 dark:text-gray-100"
           >
             <Route path={route.path} exact={route.exact}>
               <span
                 className="absolute inset-y-0 left-0 w-1 h-12 bg-primary rounded-tr-lg rounded-br-lg"
                 aria-hidden="true"
               ></span>
             </Route>
             <i>
                   <ion-icon className="nc-icon h-32" name={route.icon}></ion-icon>
                 </i>
             <span className="ml-4 ">{route.name}</span>
           </a>
         </li>): ( <li className="relative px-6 py-3 text-lg" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex text-left items-center font-regular w-full text-sm transition-colors duration-150 hover:text-white dark:hover:text-gray-200"
                activeclassName="text-green-500 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 h-12 bg-primary rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <i>
                      <ion-icon className="nc-icon h-32" name={route.icon}></ion-icon>
                    </i>
                <span className="ml-4 ">{route.name}</span>
              </NavLink>
            </li>)
          
        )}
      </ul>
     
    </div>
  );
}

export default SidebarContent;
