import React from "react";
import fakeData from "./fakeData";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="mt-16 text-center font-bold text-red-500 text-2xl">
      <h1>Some Memorable Moments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
        {fakeData.map((image) => (
          <img key={image.id}
            className=" w-full zoom rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={image.img}
            alt="nimage"
          />
        ))}
      </div>
      <Link to="/photo-gallery">
        <Button color="purple" className="ml-5 mt-5">See More</Button>
      </Link>
    </div>
  );
};

export default Gallery;
