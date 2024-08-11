import { chillax } from "@/app/fonts";
import React from "react";

const DiscoverTitle = () => {
  return (
    <div className={`${chillax.className} w-full px-0 py-16`}>
      <h2 className="text-center font-semibold text-xl md:text-2xl xl:text-3xl">
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </h2>
    </div>
  );
};

export default DiscoverTitle;
