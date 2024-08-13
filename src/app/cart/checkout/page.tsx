import { chillax } from "@/app/fonts";
import PaymentDetailsSection from "@/components/checkout-page/payment-details-section";
import YourOrderSection from "@/components/checkout-page/your-order-section";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col items-start gap-5 mt-5 md:m-16 mb-28 w-full min-h-screen">
      <h2
        className={`${chillax.className} font-semibold text-2xl text-color_4`}
      >
        Checkout
      </h2>
      <div className="flex items-start flex-col xl:flex-row w-full p-0 gap-28">
        <YourOrderSection />
        <PaymentDetailsSection />
      </div>
    </div>
  );
};

export default CheckoutPage;
