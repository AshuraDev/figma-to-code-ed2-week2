import Image from "next/image";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center">
      <div className="w-96 md:w-100 flex items-center justify-center flex-col gap-3">
        <Image
          src={"/icons/check.svg"}
          alt="Check Icon"
          width={50}
          height={50}
          objectFit="contain"
        />
        <h2 className="font-semibold text-lg text-black">Thanks for your order !</h2>
        <p className="font-medium text-xs text-color_3">The order confirmation has been sent to johndoe@gmail.com </p>
      </div>
    </div>
  );
};

export default PaymentPage;
