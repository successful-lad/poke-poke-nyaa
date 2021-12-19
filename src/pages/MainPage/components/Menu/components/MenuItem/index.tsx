import React, { FC } from "react";
import { IMenuItem } from "./interfaces";
import './style.css';

const MenuItem:FC<IMenuItem> = ({ text, onClick}) => {
  return (
    <div
      className='p-0.5 bg-black rounded-l text-white fontPixel text-2xl mb-4 cursor-pointer px-10 py-2 text-center'
      onClick={onClick}
    >
      {text}
    </div>
  )
};

export default MenuItem;