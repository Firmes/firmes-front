import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  /* {
    to: "creators",
    link: "CREATORS",
  }, */
  {
    to: "",
    link: "HOME",
  },
  {
    to: "work",
    link: "WORK",
  },
  {
    to: "about-us",
    link: "ABOUT US"
  },
  /* {
    to: "skills",
    link: "SKILLS",
  },
  {
    to: "souvenirs",
    link: "SOUVENIRS",
  },
  {
    to: "chill",
    link: "CHILL",
  }, */
  {
    to: "contact",
    link: "CONTACT",
  },
];

export const SideBar = () => {


  let activeStyle = {
    color: "#8b56fa",
  };

  return (
    <nav className="hidden lg:flex justify-end m-4 z-50 absolute right-0 bottom-32">
      <ul className="text-white text-4xl text-right">
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
