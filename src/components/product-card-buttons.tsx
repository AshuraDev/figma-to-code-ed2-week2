import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const ProductCardButtons = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center p-0 gap-1 h-11 absolute bottom-4 left-0 right-0">
      <Button className="text-color_4 font-semibold text-sm flex flex-row justify-center items-center py-3 px-5 gap-1 rounded-full bg-white hover:bg-white">
        <Image
          src={"/icons/cart.svg"}
          alt="Cart icon"
          width={20}
          height={20}
          objectFit="contain"
        />
        Add to cart
      </Button>
      <Button className="text-white border-2 border-white font-semibold text-sm flex flex-row justify-center items-center py-3 px-5 gap-1 rounded-full bg-transparent hover:bg-transparent">
        BUY NOW
      </Button>
    </div>
  );
};

export default ProductCardButtons;
