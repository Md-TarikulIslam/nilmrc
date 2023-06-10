import React from "react";
import img from "../../../components/assets/images/footer/footer_top_bg.png";
import ICTPage from "./ICTPage";
import SideNav from "../../Shared/SideNav/SideNav";

const ICTPageFlex = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row mt-16 justify-between px-0 md:px-5 lg:px-10">
        <ICTPage />
        <SideNav />
      </div>
      <img className="w-full" src={img} alt="" />
    </div>
  );
};

export default ICTPageFlex;
