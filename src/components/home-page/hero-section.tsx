import { chillax } from "@/app/fonts";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="mt-10 flex items-center justify-center text-center w-full h-96 md:h-99 xl:h-100 bg-black/25 bg-[url('/images/hero_image.webp')] bg-cover bg-center bg-no-repeat rounded-[52px]">
      <div className="flex flex-col items-center p-0 gap-10">
        <div className="flex flex-row items-center p-0 gap-3">
          <div className="w-16 h-[0.5px] bg-white rounded-3xl" />
          <h3 className="text-sm text-white">
            We bring new fashion to the world
          </h3>
          <div className="w-16 h-[0.5px] bg-white rounded-3xl" />
        </div>
        <h1
          className={`${chillax.className} font-bold text-2xl md:text-4xl xl:text-5xl uppercase text-white`}
        >
          DISCOVER THE LATEST FASHION TRENDS HERE
        </h1>
        <p className="text-base text-white">
          Discover a world of fashion with our meticulously curated outfits.
          Shop now to update your wardrobe with chic and stylish outfits.
        </p>
        <div className="flex flex-row items-center justify-center ">
          <Button className="bg-white flex items-center justify-center py-3 px-5 text-sm font-semibold text-color_4 rounded-full hover:bg-color_2 hover:text-color_4">
            Start Shopping
          </Button>
          <Button className="bg-white w-11 h-11 flex items-center justify-center rounded-full text-sm font-semibold text-color_4 hover:bg-color_2 hover:text-color_4">
            <Image
              src={"/icons/arrow.svg"}
              alt="Close Menu"
              width={30}
              height={30}
              objectFit="contain"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
