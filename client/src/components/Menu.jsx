import React from "react";
import { GoStar } from "react-icons/go";
import { IoFootball } from "react-icons/io5";
import { SiAffine } from "react-icons/si";
import { FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuArray = [
  {
    id: 1,
    menu_name: "Match Predictions",
    icon: <IoFootball />,
    link : "/"
  },
  {
    id: 2,
    menu_name: "Predictions",
    icon: <SiAffine />,
    link : "/Predictions"
  },
  {
    id: 3,
    menu_name: "Table Score",
    icon: <FaTable />,
    link : "/TableScore"
  },
  {
    id: 4,
    menu_name: "Favorites",
    icon: <GoStar />,
    link : "/favourites"
  },
];

const Menu = () => {
  return (
    <>
      {
        menuArray.map((menuItem) => (
          <Link to={`${menuItem.link}`}
            key={menuItem.id} 
            className='flex items-center mx-5 hover:cursor-pointer
              hover:text-hard-or text-lg'
          >
            <p className="mr-2">{ menuItem.icon }</p>
            <p>{ menuItem.menu_name }</p>
          </Link>
        ))
      }
    </>
  );
};

export default Menu;