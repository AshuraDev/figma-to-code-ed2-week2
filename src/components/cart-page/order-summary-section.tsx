import Link from "next/link";
import React from "react";

const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-4 w-full xl:w-1/4">
      <h2 className="font-semibold text-lg text-color_4">Order summary</h2>
      <div className="flex flex-col items-center gap-1 w-full">
        <div className="flex items-start justify-between w-full gap-1 font-medium text-sm text-color_3">
          <span>Subtotal</span>
          <span>$524.00</span>
        </div>
        <div className="flex items-start justify-between w-full gap-1 font-medium text-sm text-color_3">
          <span>Discout</span>
          <span>$0</span>
        </div>
      </div>
      <div className="w-full px-3 bg-slate-100 h-[1px]" />
      <div className="flex items-start justify-between w-full gap-1">
        <span className="font-semibold text-sm text-color_4">Order total</span>
        <span className="font-extrabold text-base text-color_4">$524.00</span>
      </div>
      <Link href={"/cart/checkout"} className="flex items-center justify-center px-5 py-3 bg-color_4 font-semibold text-sm text-white rounded-full w-full">
        Checkout now
      </Link>
    </div>
  );
};

export default OrderSummary;
