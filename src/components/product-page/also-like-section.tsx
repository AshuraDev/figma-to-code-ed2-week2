import { chillax } from "@/app/fonts";
import React from "react";
import AlsoLikeProducts from "./also-like-products-list";

const AlsoLike = () => {
  return (
    <div className="w-full mt-20 mb-24">
      <div className="w-full flex items-center flex-col gap-8">
        <div className="w-full">
          <h1
            className={`${chillax.className} text-left text-2xl xl:text-3xl font-semibold text-color_4 `}
          >
            You may also like
          </h1>
        </div>
        {/*  */}
        <AlsoLikeProducts />
      </div>
    </div>
  );
};

export default AlsoLike;
