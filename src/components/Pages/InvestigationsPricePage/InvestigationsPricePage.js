import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const InvestigationsPricePage = () => {
  return (
    <div className="mt-10">
      <Card>
        <CardBody>
          <h1 className="font-extrabold text-black text-3xl mb-5">
            Services available at NILMRC with price.
          </h1>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1nVk4XTzBGOjG_l20Fqs7W9AsX_pGqWqh/view?usp=sharing"
            className="font-extrabold text-2xl text-red-500 hover:underline hover:underline-offset-4"
          >
            Active Test in NILMRC.pdf
          </a>
        </CardBody>
      </Card>
      <ScrollRestoration />
    </div>
  );
};

export default InvestigationsPricePage;
