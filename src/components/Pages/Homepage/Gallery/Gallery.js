import React from "react";
import fakeData from "./fakeData";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
      {fakeData.map((image) => (
        <img
          className="h-4/5 w-full rounded-lg shadow-xl shadow-blue-gray-900/50"
          src={image.img}
          alt="nimage"
        />
      ))}
      <Link to='/photo-gallery'><Button>See More</Button></Link>
    </div>
  );
};

export default Gallery;
