import React from "react";
import img1 from "../../../components/assets/images/sidenav/Pic_Director.jpg";
import img2 from "../../../components/assets/images/sidenav/nilmrc-dd.jpg";
import img3 from "../../../components/assets/images/sidenav/nilmrc-ad.jpg";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-2 xl:grid-cols-1">
        <div className="side-card w-full md:lg:w-full xl:w-1/5">
          <h1 className="text-xl font-semibold designation p-1 text-white">
            Director
          </h1>
          <img className="w-28 mx-auto" src={img1} alt="" />
          <p className="text-xs mb-1">Prof. Dr. Mohammed Sahed Ali Jinnah</p>
          <p className="text-xs mb-1">Director</p>
          <p className="text-xs mb-1 leading-5">
            National Institute of Laboratory Medicine and Referral Centre
            (NILMRC)
          </p>
          <button className="text-xs underline details-btn">Details</button>
        </div>
        <div className="side-card w-full md:lg:w-full xl:w-1/5">
          <h1 className="text-xl font-semibold designation p-1 text-white">
            Deputy Director
          </h1>
          <img className="w-28 mx-auto" src={img2} alt="" />
          <p className="text-xs mb-1"> Dr. Md. Mezbahur Rahman</p>
          <p className="text-xs mb-1">Deputy Director</p>
          <p className="text-xs mb-1 leading-5">
            National Institute of Laboratory Medicine and Referral Centre
            (NILMRC)
          </p>
          <button className="text-xs underline details-btn">Details</button>
        </div>
        <div className="side-card w-full md:lg:w-full xl:w-1/5">
          <h1 className="text-xl font-semibold designation p-1 text-white">
            Assitant Director
          </h1>
          <img className="w-28 mx-auto" src={img3} alt="" />
          <p className="text-xs mb-1"> Dr. Abu Ahammad Al Mamun</p>
          <p className="text-xs mb-1">Assistant Director</p>
          <p className="text-xs mb-1 leading-5">
            National Institute of Laboratory Medicine and Referral Centre
            (NILMRC)
          </p>
          <button className="text-xs underline details-btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
