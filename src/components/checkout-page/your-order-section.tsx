import Image from "next/image";
import React from "react";

const YourOrderSection = () => {
  const products = [
    {
      name: "T-Shirt",
      sub: 174,
      size: "Color:Green - Size:Large",
      picture: "/images/T_shirt.webp",
    },
    {
      name: "Men's Dri-FIT Golf Jacket",
      sub: 100,
      size: "Color:Ocean-Size:Large",
      picture: "/images/Jacket.webp",
    },
    {
      name: `Tatum 2 "Red Cement"`,
      sub: 250,
      size: "Size : 15",
      picture: "/images/Jordan.webp",
    },
  ];
  return (
    <div className="w-full xl:w-[calc(50%-56px)]">
      <div className="flex flex-col items-start gap-4 p-0">
        <div className="">
          <h4 className="font-semibold text-sm text-color_4">Your Order</h4>
          <p className="font-medium text-xs text-color_3">
            By placing your order, you agree to Ballamas{" "}
            <span className="font-bold">Privacy</span> and
            <span className="font-bold">Policy</span>.
          </p>
        </div>
        {products.map((data, i) => (
          <div
            className="flex items-center p-0 gap-2 justify-between w-full overflow-hidden"
            key={i}
          >
            <div className="flex items-center gap-2">
              <Image
                src={data.picture}
                alt={data.name}
                height={72}
                width={72}
                objectFit="cover"
              />
              <div className="">
                <h2 className="text-sm font-semibold text-color_4 truncate">
                  {data.name}
                </h2>
                <p className="text-xs font-medium text-color_3">{data.size}</p>
              </div>
            </div>
            <div className="text-right">${data.sub}.00</div>
          </div>
        ))}
        <div className="flex flex-col items-start gap-2 font-medium text-xs text-color_4">
          <h4 className="">Discount Code</h4>
          <div className="flex items-start p-0 gap-2">
            <input
              placeholder="Add discount code"
              type="text"
              className="rounded-full flex items-center justify-between border border-color_3 h-11 px-3 w-72"
            />
            <button className="flex justify-center items-center py-3 px-5 bg-color_4 text-white rounded-full h-11">
              Apply
            </button>
          </div>
          <p className="">
            New customer? Signup
            <span className="text-color_3"> to get better offer</span>
          </p>
        </div>
        <div className="flex items-start p-0 flex-col gap-3 font-medium text-xs text-color_3 w-full">
          <div className="flex items-center justify-between gap-3 w-full">
            <span>Subtotal</span>
            <span>$524.00</span>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-color_4 w-full">
            <span>Order total</span>
            <span>$524.00</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 font-medium text-xs text-color_4 w-full">
          <h4>Shipping method</h4>
          <div className="flex items-center justify-between w-full p-3 gap-5 rounded-xl border border-color_1">
            <div className="flex gap-2 items-center" >
              <input type="radio" />
              <div className="">
                <h4>Free shipping</h4>
                <p className="text-color_3 text-xs">7-30 business days</p>
              </div>
            </div>
            <span> $0</span>
          </div>
          <div className="flex items-center justify-between w-full p-3 gap-5 rounded-xl border border-color_1">
            <div className="flex gap-2 items-center" >
              <input type="radio" checked className="accent-color_4 "/>
              <div className="">
                <h4>Regular shipping</h4>
                <p className="text-color_3 text-xs">3-14 business days</p>
              </div>
            </div>
            <span> $7,50</span>
          </div>
          <div className="flex items-center justify-between w-full p-3 gap-5 rounded-xl border border-color_1">
            <div className="flex gap-2 items-center" >
              <input type="radio" />
              <div className="">
                <h4>Express shipping</h4>
                <p className="text-color_3 text-xs">1-3 business days</p>
              </div>
            </div>
            <span> $7,50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrderSection;
