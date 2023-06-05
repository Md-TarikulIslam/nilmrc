import React from "react";
import "./Footer.css";
import img from "../../../components/assets/images/footer/np-logo-set.png";

const Footer = () => {
  return (
    <div className="footer-card max-w-screen-xl mx-auto ">
      <div className="flex flex-col xl:flex-row items-center justify-between lg:px-5 px-0">
        <div>
          <ul className="flex gap-10 text-sm ">
            <li className="border-b-2 md:border-b-0 lg:border-r-2 border-gray-500 pr-0 lg:pr-6">
              Contacts
            </li>
            <li className="border-b-2 md:border-b-0 lg:border-r-2 border-gray-500 pr-0 lg:pr-6">
              FAQ
            </li>
            <li className="border-b-2 md:border-b-0 lg:border-r-2 border-gray-500 pr-0 lg:pr-6">
              Policy
            </li>
            <li className="border-b-2 md:border-b-0 lg:border-r-2 border-gray-500 pr-0 lg:pr-6">
              Credits
            </li>
            <li className="border-b-2 md:border-b-0 border-gray-500 lg:border-none pr-6">
              At a glance
            </li>
          </ul>
          <p className="text-sm mt-5 text-center lg:text-left">
            Site was last updated:{" "}
            <span className="italic">2023-06-05 15:17:35</span>
          </p>
        </div>

        <div className="flex text-sm">
          <div className="flex flex-col ">
            <div className="flex flex-col lg:flex-row">
              <p className="my-3 md:my-0 text-center">
                Planning and Implementation:{" "}
              </p>
              <ul className="flex gap-3">
                <li className="ml-0 md:ml-2">Cabinet Division, </li>
                <li>a2i, </li>
                <li>BCC, </li>
                <li>DOICT, </li>
                <li>BASIS.</li>
              </ul>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-5">
              <p>Technical Support:</p>
              <img className="ml-5" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
