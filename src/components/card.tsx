import Image from "next/image";
import React from "react";
import ProductCardButtons from "./product-card-buttons";
import Link from "next/link";

interface product {
  index: number | null;
  id: string;
  picture: string;
  title: string;
  price: string;
}

const Card = ({ index, id, picture, title, price }: product) => {
  return (
    <div className="flex flex-col items-start p-0 gap-4 h-100 w-80 relative">
      <div
        className={`flex items-center justify-center p-4 w-full h-3/4 bg-color_2 rounded-[32px] overflow-hidden relative`}
      >
        {((picture && index!=null && index! < 2) || index === 4) && (
          <div className="text-color_4 z-20 font-semibold text-xs flex flex-row items-center justify-center py-2 px-3 gap-2 absolute top-5 left-5 bg-white rounded-full">
            GET OFF 20%
          </div>
        )}
        {picture && (
          <Image src={picture} alt={title} fill className="object-cover" />
        )}
        {!picture && (
          <div className="loader border-4 border-solid border-color_7 border-l-transparent rounded-full w-9 h-9 animate-spin z-0"></div>
        )}
      </div>
      <div className="flex flex-col items-start p-0 gap-2 w-full">
        <Link
          href={`/${id}`}
          className="text-2xl md:text-3xl font-semibold text-color_4"
        >
          {title}
        </Link>
        <span className="text-xl md:text-3xl font-semibold text-color_3">
          {price}
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-10 absolute inset-0 h-3/4 z-10 rounded-[32px] overflow-hidden opacity-0 hover:opacity-100 transition-all duration-300 ease-out ">
        <ProductCardButtons />
      </div>
    </div>
  );
};

export default Card;
