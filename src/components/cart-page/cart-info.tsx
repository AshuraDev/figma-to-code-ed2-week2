import { chillax } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import CartProducts from "./cart-products";

const CartInfo = () => {
  return (
    <div className="flex flex-col gap-4 w-full xl:w-3/4">
      <div className="flex items-center w-full justify-between gap-3">
        <h2
          className={`${chillax.className} font-semibold text-2xl text-color_4`}
        >
          Cart(3)
        </h2>
        <button className="flex items-center justify-center gap-1 p-2 rounded-full bg-slate-100 font-medium text-xs text-color_3">
          <Image
            src={"/icons/trash.svg"}
            alt="user"
            width={14}
            height={14}
            objectFit="contain"
          />
          Clear Cart
        </button>
      </div>
      <CartProducts />
    </div>
  );
};

export default CartInfo;
