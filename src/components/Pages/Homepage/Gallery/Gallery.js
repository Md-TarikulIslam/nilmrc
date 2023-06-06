import React from "react";
import fakeData from "./fakeData";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/footer/footer_top_bg.png";
import './Gallery.css'

const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
        {fakeData.map((image) => (
          <img
            className="h-4/5 w-full rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={image.img}
            alt="nimage"
          />
        ))}
      </div>
      <Link to="/photo-gallery">
        <Button color="purple">See More</Button>
      </Link>
      <img className="w-full" src={image} alt="" />
    </div>
  );
};

export default Gallery;
