import React from "react";
import Carousel from "../../Pages/Homepage/Carousel/Carousel";
import { Button } from "@material-tailwind/react";

import "./Header.css";
import Navbar from "../../Pages/Homepage/Navbar/Navbar";

const Header = () => {
  return (
    <div className="px-0 lg:px-10 mx-auto">
      <div className="flex items-center justify-between bg-purple-700 px-2 py-1">
        <h1 className="text-white">Bangladesh National Portal</h1>
        <Button color="purple" size="sm">
          বাংলা
        </Button>
      </div>
      <div>
        <Carousel></Carousel>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Header;
