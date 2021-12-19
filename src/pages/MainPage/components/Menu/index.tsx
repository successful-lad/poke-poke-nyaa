import React from "react";
import { menuItems } from "./components/MenuItem/const";
import MenuItem from "./components/MenuItem";

const Menu = () =>{
  return (
    <div>
      {menuItems.map(({title, onClick}) =>(
        <MenuItem text={title} onClick={onClick} />
      ))}
    </div>
  )
};

export default Menu;