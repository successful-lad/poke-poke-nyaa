import React, { FC } from "react";
import { IBGLayer } from "./interfaces";
import './style.css';

const BGLayer:FC<IBGLayer> = (props, { bgType }) => {

  console.log('bgType', bgType)

  return (
    <div className='w-screen min-w-fit h-screen flex justify-center items-center'>
      <div className='defaultBgConfig w-[1200px] h-[700px]'>
        {props.children}
      </div>
    </div>
  )
};

export default BGLayer;