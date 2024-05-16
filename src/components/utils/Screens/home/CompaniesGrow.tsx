import React from 'react';
import { SiAdobe } from "react-icons/si";
import { FaPaypal, FaSlack, FaGoogle, FaAmazon } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";

const CompaniesGrow = () => {
  return (
    <div className=" container py-10">
      <div className="flex justify-center md:justify-start pb-5 text-lg">
        <h1>Companies we helped grow</h1>
      </div>
      <div className="flex flex-wrap text-newGrey justify-center">
        <div className="flex gap-1 items-center md:w-1/6 w-1/3">
          <SiAdobe size={30} /> Adobe
        </div>
        <div className="flex gap-1 items-center md:w-1/6 w-1/3">
          <FaPaypal size={30} /> Paypal
        </div>
        <div className="flex gap-1 items-center md:w-1/6 w-1/3">
          <FaSlack size={30}/> Slack
        </div>
        <div className="flex gap-1 items-center md:w-1/6 w-1/3">
          <FaGoogle size={30} /> Google
        </div>
        <div className="flex gap-1 items-center md:w-1/6 w-1/3">
          <FaAmazon size={30} /> Amazon
        </div>
        <div className="flex gap-1 items-center md:w-1/6 w-1/3">
          <IoLogoMicrosoft size={30} /> Microsoft
        </div>
      </div>
    </div>
  );
}

export default CompaniesGrow;
