import React from "react";
import "./VideoGallery.css";
import { Typography } from "@material-tailwind/react";

const VideoGallery = () => {
  return (
    <div className="mt-10 mx-5 lg:mx-0">
      <Typography className="text-3xl  font-extrabold text-red-600">
        Depression: Let's Talk
      </Typography>
      <Typography variant="paragraph" className="text-justify my-5"> 
        7 April 2017 – Depression is the leading cause of ill health and
        disability worldwide. More than 300 million people are now living with
        depression, an increase of more than 18% between 2005 and 2015. WHO is
        leading a global campaign on depression for World Health Day 2017, with
        the goal of enabling more people with mental disorders to live healthy,
        productive lives.
      </Typography>
      <ul className="list-disc ml-7 mb-5">
        <a target="_blank" href="http://www.who.int/entity/campaigns/world-health-day/2017/en/index.html"><li className="hover:text-red-600 hover:underline">World Health Day</li></a>
        <a target="_blank" href="http://www.who.int/entity/campaigns/world-health-day/2017/fact-sheets/en/index.html"><li className="hover:text-red-600 hover:underline">Fact sheets on mental health</li></a>
      </ul>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/Yv_dvG_2VLI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoGallery;
