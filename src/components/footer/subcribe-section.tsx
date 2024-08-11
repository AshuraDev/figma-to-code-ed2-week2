import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubscribeSection = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-5">
      <Link href={"/"} className="relative sm:w-36 h-9 w-28">
        <Image src={"/images/logo.svg"} alt="Logo" objectFit="contain" fill />
      </Link>
      <p className="font-medium text-sm text-color_2">Subscribe to our newsletter for upcoming products and best discount for all items</p>
        <div className="flex items-start p-0 gap-4">
            <input type="email" placeholder="Your email" className="w-56 md:w-80 h-11 py-0 px-3 border border-white rounded-full bg-transparent text-white"/>
            <button className="flex items-center justify-center py-3 px-5 bg-white rounded-full font-semibold text-color_4">Subscribe</button>
        </div>
    </div>
  );
};

export default SubscribeSection;
