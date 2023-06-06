import React from "react";
import Carousel from "../../Pages/Homepage/Carousel/Carousel";
import { Button } from "@material-tailwind/react";
import image from "../../../components/assets/images/footer/footer_top_bg.png";

import "./Header.css";
import Navbar from "../../Pages/Homepage/Navbar/Navbar";
import MainGrid from "../../Pages/Homepage/MainGrid";
import Gallery from "../../Pages/Homepage/Gallery/Gallery";

const Header = () => {
  return (
    <div className="main-card px-10 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between bg-purple-700 px-2 py-1">
        <h1 className="text-white">Bangladesh National Portal</h1>
        <Button color="purple" size="sm">
          বাংলা
        </Button>
      </div>
      <div>
        <Carousel></Carousel>
        <Navbar></Navbar>
        <MainGrid></MainGrid>
        <Gallery></Gallery>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Header;
