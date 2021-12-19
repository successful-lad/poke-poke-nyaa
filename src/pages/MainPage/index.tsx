import React from "react";
import BGLayer from "../../shared/components/BGLayer/index";
import './style.css'
import Menu from "./components/Menu";


const MainPage = () => {
  return (
    <>
      <BGLayer bgType='default'>
        <div className='w-full min-w-fit h-full flex justify-center items-center'>
          <Menu/>
        </div>
      </BGLayer>
    </>
  )
};

export default MainPage;