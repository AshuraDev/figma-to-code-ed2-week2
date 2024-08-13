import Image from "next/image";
import React from "react";

const CartProducts = () => {
  const products = [
    {
      name: "T-Shirt",
      price: 87,
      sub: 174,
      size: "Green-Large",
      picture: "/images/T_shirt.webp",
      qty: "2",
    },
    {
      name: "Men's Dri-FIT Golf Jacket",
      price: 100,
      sub: 100,
      size: "Ocean-Large",
      picture: "/images/Jacket.webp",
      qty: "1",
    },
    {
      name: `Tatum 2 "Red Cement"`,
      price: 125,
      sub: 250,
      size: "Size : 15",
      picture: "/images/Jordan.webp",
      qty: "2",
    },
  ];
  return (
    <div>
      <table className="w-full ">
        <thead className="font-medium text-xs text-color_3">
          <tr>
            <th className="text-left">Product</th>
            <th className="text-left">Quantity</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        {products.map((data, i) => (
          <tbody key={i} className="gap-3">
            <tr className="border-b border-color_1 ">
              <td className="flex items-center p-0 my-2 gap-2 overflow-hidden">
                <Image
                  src={data.picture}
                  alt="img"
                  height={72}
                  width={72}
                  objectFit="cover"
                />
                <div className="w-[calc(100%-85px)]">
                  <h2 className="text-sm font-semibold text-color_4 truncate">
                    {data.name}
                  </h2>
                  <p className="text-xs font-medium text-color_3">
                    {data.size}
                  </p>
                  <p className="text-sm font-semibold text-color_4">
                    ${data.price}
                  </p>
                </div>
              </td>
              <td>
                <div className="flex gap-1 w-full">
                  <div className="flex items-center gap-3 bg-slate-100 py-1 px-3 rounded-full">
                    <button>
                      <Image
                        src={"/icons/remove.svg"}
                        alt="user"
                        width={18}
                        height={18}
                        objectFit="contain"
                      />
                    </button>
                    <span>{data.qty}</span>
                    <button>
                      <Image
                        src={"/icons/plus.svg"}
                        alt="user"
                        width={18}
                        height={18}
                        objectFit="contain"
                      />
                    </button>
                  </div>
                  <div className="flex bg-slate-100 items-center justify-center p-3 rounded-full">
                    <button className="">
                      <Image
                        src={"/icons/trash.svg"}
                        alt="user"
                        width={18}
                        height={18}
                        objectFit="contain"
                      />
                    </button>
                  </div>
                </div>
              </td>
              <td className="text-right">${data.sub}.00</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CartProducts;
