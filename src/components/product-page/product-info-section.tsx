import { chillax } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import SizeBadge from "../size-badge";

interface Product {
  title: string;
  description: string;
  picture: string;
}

const ProductInfoScetion = ({ title, description, picture }: Product) => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start gap-10 w-full">
      <div className="relative h-600 w-full xl:w-100 bg-color_2">
        <Image src={picture} alt={title} objectFit="cover" fill />
      </div>
      <div className="w-full xl:w-100 flex flex-col items-start p-0 gap-7">
        <h1
          className={`${chillax.className} font-semibold text-3xl xl:text-5xl text-color_4`}
        >
          {title}
        </h1>
        <p className="text-3xl font-semibold text-color_4">CAD $80</p>
        <div className="xl:text-3xl font-medium text-xl">Color : Green</div>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full bg-color_7"></button>
          <button className="w-7 h-7 rounded-full bg-color_6"></button>
          <button className="w-7 h-7 rounded-full bg-color_7"></button>
          <button className="w-7 h-7 rounded-full bg-color_6"></button>
        </div>
        <div className="flex flex-col gap-1">
          <p className="xl:text-3xl font-medium text-2xl">Size:</p>
          <div className="flex items-start gap-3 flex-wrap">
            <SizeBadge size="XS" selected={true} />
            <SizeBadge size="S" selected={false} />
            <SizeBadge size="M" selected={false} />
            <SizeBadge size="L" selected={false} />
            <SizeBadge size="XL" selected={false} />
          </div>
        </div>
        <div className="flex flex-wrap w-full gap-2 justify-between">
            <button className="text-sm font-semibold w-[calc(50%-4px)] text-white bg-color_4 border-2 border-color_4 py-3 px-5 rounded-full">BUY NOW</button>
            <button className="text-sm font-semibold w-[calc(50%-4px)] text-color_4 bg-white border-2 border-color_4 py-3 px-5 rounded-full">ADD TO CART</button>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={`${chillax.className} text-3xl font-medium text-color_4`}>Description</h2>
          <p className="text-lg text-color_3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoScetion;
