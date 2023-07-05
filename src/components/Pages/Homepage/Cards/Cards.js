import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { FcNext } from "react-icons/fc";
import img1 from "../../../assets/images/card/1.png";
import img2 from "../../../assets/images/card/2.png";
import img3 from "../../../assets/images/card/3.png";
import { useQuery } from "@tanstack/react-query";

const Cards = () => {
  const { data: notices = [] } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await fetch("https://nilmrc-server.vercel.app/nilmrc-notice");
      const data = await res.json();
      return data;
    },
  });
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
            <div>
              {notices.map((notice) => {
                return (
                  <div>
                    <a target="_blank" href={notice.link}>
                      {" "}
                      <Typography className="hover:underline flex items-center gap-2">
                        <FcNext />
                        {notice.news}
                      </Typography>
                    </a>
                  </div>
                );
              })}
            </div>
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
