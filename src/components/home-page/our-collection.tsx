import { chillax } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const OurCollection = () => {
  return (
    <div className="mt-20 mb-24 p-0 flex flex-col items-center justify-center gap-9 ">
      <div className="flex gap-1 flex-col items-center">
        <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl text-center text-color_4">
          OUR COLLECTION
        </h1>
        <p className="font-medium text-center text-sm md:text-base xl:text-lg text-color_3">
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
      </div>
      <div className="flex flex-col-reverse w-full md:flex-row items-center justify-center p-0 gap-4 mt-9 xl:max-w-900]">
        <div className="w-full md:w-1/2 xl:w-300 h-99 bg-[url('/images/Collection_Pic_1.webp')] bg-cover bg-center bg-no-repeat rounded-[32px] relative flex items-center justify-center">
          <button className="font-semibold text-sm uppercase text-color_4 absolute bottom-6 flex items-end justify-center gap-2 bg-white rounded-full py-3 px-5">
            learn more
            <Image
              src={"/icons/arrow.svg"}
              alt="Arrow icon"
              width={20}
              height={20}
              objectFit="contain"
            />
          </button>
        </div>
        <div className="w-full flex items-center justify-center md:w-1/2 xl:w-600 h-99 bg-[url('/images/Collection_Pic_2.webp')] bg-cover bg-center bg-no-repeat rounded-[32px]">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className={`${chillax.className} text-3xl text-transparent bg-clip-text font-bold xl:text-5xl text-stroke`}>
              CLASSIC MEN
            </h1>
            <p className="text-white text-sm xl:text-lg ">
              We’re changing the way things get made
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
