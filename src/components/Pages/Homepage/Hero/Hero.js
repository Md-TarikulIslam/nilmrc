import React from "react";
import image from "../../../assets/images/hero/dir_home.jpg";
import "./Hero.css";
import { Typography } from "@material-tailwind/react";
import Gallery from "../Gallery/Gallery";
import { ScrollRestoration } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-size">
      <div className="hero-position mt-10 px-5 xl:px-0">
        <Typography
          variant="h5"
          className="text-center text-green-500 leading-10"
        >
          National Institute of Laboratory Medicine and Referral Centre <br />
          (NILMRC), Dhaka, Bangladesh
        </Typography>
        <Typography variant="h6" className="text-blue-900 text-center my-7">
          Prof. (Dr.) Mohammed Shahed Ali Jinnah as a Director Join on 1st
          August, 2022
        </Typography>
        <img className="hero-img" src={image} alt="" />
        <Typography variant="h5" className="text-blue-900 my-3">
          Prof. (Dr.) Mohammed Shahed Ali Jinnah
        </Typography>
        <Typography variant="paragraph" className="text-gray-700 my-3">
          MBBS; MD (Pathology)
          <br /> Director
          <br /> National Institute of Laboratory Medicine and Referral Centre
          (NILMRC)
          <br /> F/17-A, Sher-E-Bangla Nagar, Agargaon, Dhaka-1207
          <br /> Bangladesh.
        </Typography>
        <Typography variant="h5" className="text-blue-900 my-3">
          Message of Director
        </Typography>
        <Typography
          variant="paragraph"
          className="text-gray-700 my-3 text-justify msg"
        >
          16 December 1971 is a date very memorable to every Bengali national.
          It is the day when Bangladesh conquer freedom after almost 9 months of
          fight, struggle and a lot of sacrifices. It is celebrated as Victory
          Day. On this Day, I remember the millions of people who sacrificed
          their lives to achieve victory. Salute to the brave army and people of
          Bangladesh.
        </Typography>
        <Typography variant="h5" className="text-red-600 mt-8 mb-4">
          Objective of NILMRC, Bangladesh:
        </Typography>
        <ul className="list-disc ml-5 ">
          <li>
            To provide facility for community and hospital based training for
            all level of laboratory personnel.
          </li>
          <li>
            To make a network all over the country to ensure quality of
            laboratory services.
          </li>
          <li>
            Provide pathological service and utilize the institute as referral
            laboratory.
          </li>
          <li>Introduce accreditation in the field of laboratory medicine</li>
          <li>
            Conduct Post-graduate and Undergraduate courses on different
            subjects of Laboratory Medicine.
          </li>
          <li>Conduct research activities</li>
          <li>Generate income through service provision.</li>
        </ul>
      </div>
      <Gallery></Gallery>
      <ScrollRestoration />
    </div>
  );
};

export default Hero;
