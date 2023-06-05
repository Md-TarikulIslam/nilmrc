import React from "react";
import Carousel from "../../Pages/Homepage/Carousel/Carousel";
import { Button } from "@material-tailwind/react";

import "./Header.css";
import Navbar from "../../Pages/Homepage/Navbar/Navbar";
import SideNav from "../SideNav/SideNav";

const Header = () => {
  return (
    <div className="main-card px-10 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between bg-purple-700 px-2 py-1">
        <h1 className="text-white">Bangladesh National Portal</h1>
        <Button color="purple" size="sm">
          English
        </Button>
      </div>
      <div>
        <Carousel></Carousel>
        <Navbar></Navbar>
        <SideNav></SideNav>
      </div>
    </div>
  );
};

export default Header;
