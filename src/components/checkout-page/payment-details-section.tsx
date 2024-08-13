import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentDetailsSection = () => {
  return (
    <div className="w-full xl:w-[calc(50%-56px)] ">
      <h4 className="font-semibold text-sm text-color_4">Payment details</h4>
      <p className="font-medium text-xs text-color_3">
        Complete your purchase by providing your payment details.
      </p>
      <div className="flex flex-col w-full gap-5 mt-4">
        <h4 className="font-semibold text-sm text-color_4">Shipping address</h4>
        <form>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col w-[calc(50%-6px)]">
              <label htmlFor="FirstName">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="LastName"
                className="rounded-full px-3 border border-color_3 w-full  h-11"
              />
            </div>
            <div className="flex flex-col w-[calc(50%-6px)]">
              <label htmlFor="LastName">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="LastName"
                className="rounded-full px-3 border border-color_3 w-full  h-11"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col w-[calc(50%-6px)]">
              <label htmlFor="mail">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                className="rounded-full px-3 border border-color_3 w-full  h-11"
              />
            </div>
            <div className="flex flex-col w-[calc(50%-6px)]">
              <label htmlFor="num">Phone number</label>
              <input
                type="number"
                placeholder="Enter your phone number"
                name="num"
                className="rounded-full px-3 border border-color_3 w-full  h-11"
              />
            </div>
          </div>
          {/*  */}
          <Link href={"/cart/checkout/payment"}>
            <button className="flex items-center mt-5 w-full justify-center py-3 px-5 gap-2 font-semibold text-sm rounded-full bg-color_4 text-white">
              Pay $524.00
              <Image
                src={"/icons/arrow-right.svg"}
                alt="Arrow icon"
                width={30}
                height={30}
                objectFit="contain"
                className="text-white"
              />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetailsSection;
