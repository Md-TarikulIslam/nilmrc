import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { FcNext } from "react-icons/fc";
import img1 from "../../../assets/images/card/1.png";
import img2 from "../../../assets/images/card/2.png";
import img3 from "../../../assets/images/card/3.png";

const Cards = () => {
  return (
    <div className="mt-10">
      <Card>
        <CardBody className="flex gap-5 flex-col md:flex-row">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <Typography className="text-red-600 text-xl font-bold mb-5">
              Notice Board
            </Typography>
            <Typography className="hover:underline flex items-center gap-2">
              <FcNext />
              সরকারি স্বাস্থ্য ব্যবস্থাপনা -১ঃ ১৮৪(পবিত্র ঈদ-উল-আযহা,২০২৩
              উদ্‌যাপন উপলক্ষ্যে দেশের সকল ...)
            </Typography>
            <Typography className="hover:underline flex items-center gap-2">
              <FcNext />
              প্রশাসন-১ শাখাঃ ১৩৯১(জাতীয় পুষ্টি সপ্তাহ ২০২৩ উদ্‌যাপন উপলক্ষ্যে
              সভা){" "}
            </Typography>
            <Typography className="hover:underline flex items-center gap-2">
              <FcNext />
              পার-৪ শাখাঃ ১৫০(সভার নোটিশ)(একই তারিখ ও স্মারকে প্রতিস্থাপিত){" "}
            </Typography>
            <Typography className="hover:underline flex items-center gap-2">
              <FcNext />
              নমুনা যোগদান পত্র{" "}
            </Typography>
            <Typography className="hover:underline flex items-center gap-2">
              <FcNext />
              পার-২: ২৯৬ (সিনিয়র স্কেল প্রদান){" "}
            </Typography>
          </div>
        </CardBody>
      </Card>
      {/* //flex gap-5 mt-5 flex-col md:flex-row */}
      <div className="flex gap-5 mt-5 flex-col md:flex-row">
        <Card className="w-full">
          <CardBody>
            <Typography className="text-red-600 text-xl font-bold mb-5">
              Patient Portal
            </Typography>
            <div className="flex items-center gap-5">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://nilmrc-patient.netlify.app/login"
                >
                  <Typography className="hover:underline flex items-center gap-2">
                    <FcNext />
                    Login
                  </Typography>
                </a>
                <a target="_blank" href="https://nilmrc-patient.netlify.app/">
                  <Typography className="hover:underline flex items-center gap-2">
                    <FcNext />
                    Sign Up
                  </Typography>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody>
            <Typography className="text-red-600 text-xl font-bold mb-5">
              Investigations Price
            </Typography>
            <div className="flex items-center gap-5">
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1nVk4XTzBGOjG_l20Fqs7W9AsX_pGqWqh/view"
                >
                  {" "}
                  <Typography className="hover:underline flex items-center gap-2">
                    <FcNext />
                    Check Here
                  </Typography>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
