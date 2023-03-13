import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    link: "HOME",
  },
  {
    to: "/work",
    link: "WORK",
  },
  {
    to: "/about-us",
    link: "ABOUT US"
  },
  
  {
    to: "/contact",
    link: "CONTACT",
  },
];

export const SideBar = () => {


  let activeStyle = {
    color: "#8b56fa",
  };

  return (
    <nav className="hidden lg:flex items-end justify-end m-4 w-1/6 bg-transparent ">
      <ul className="text-white text-4xl text-right absolute right-10 bottom-1/4">
        {links.map((link) => {
          return (
            <li
              key={link.link}
              className="transition-all font-extrabold hover:text-purple-700 "
            >
              <NavLink to={link.to}>{link.link}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
