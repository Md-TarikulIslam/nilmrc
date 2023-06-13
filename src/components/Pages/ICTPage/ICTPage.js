import React from "react";
import img from "../../assets/images/ict/Photo of Mohammad Humayun Kabir.jpg";
import { ScrollRestoration } from "react-router-dom";

const ICTPage = () => {
  return (
    <div>
      <img
        className="my-10 rounded-lg shadow-xl shadow-blue-gray-900/50"
        src={img}
        alt="humayunkabir"
      />
      <h1 className="text-2xl font-bold text-green-500">
        Mohammad Humayun Kabir
      </h1>
      <p className="text-red-500 font-semibold text-lg">Assistant Programmer</p>
      <p className="text-blue-800 font-semibold text-xl">
        National Institute of Laboratory Medicine and Referral Center
      </p>
      <p className="font-semibold text-lg mb-5">
        Sher-E-Bangla Nagar, Agargaon
        <br /> Dhaka-1207, Bangladesh.
      </p>
      <a
        href="tel: 01912-926049"
        className="font-semibold text-lg mb-5 hover:underline"
      >
        Phone: 01912-926049
      </a>
      <p className="font-semibold text-lg mb-5">PABX: 509, Room # 508</p>
      <span className="text-red-500 font-semibold">Email: </span>
      <a
        href="mailto: humayun.kabir@nilmrc.gov.bd"
        className="text text-blue-700 mr-2 hover:underline "
      >
        humayun.kabir@nilmrc.gov.bd,
      </a>
      <a
        href="mailto:  mhkabirsco@gmail.com"
        className="text text-blue-700 hover:underline "
      >
        mhkabirsco@gmail.com
      </a>
      <ScrollRestoration />
    </div>
  );
};

export default ICTPage;
