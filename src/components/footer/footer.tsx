import React from "react";
import SubscribeSection from "./subcribe-section";
import LinksSection from "./links-section";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-color_4 py-14 px-5 md:px-12 xl:px-32 overflow-hidden">
      <div className=" flex flex-col justify-between xl:flex-row gap-y-5 gap-x-5">
        <SubscribeSection />
        <LinksSection />
      </div>
      <div className="text-xs text-color_3 text-center mt-8 w-full flex items-center justify-center">
        © BALLAMAS 2024 by waris
      </div>
    </div>
  );
};

export default Footer;
