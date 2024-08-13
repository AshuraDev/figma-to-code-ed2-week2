import CartInfo from "@/components/cart-page/cart-info";
import OrderSummary from "@/components/cart-page/order-summary-section";
import React from "react";
const CartPage = () => {
  return (
    <div className="mt-16 mb-28 w-full min-h-screen">
      <div className="w-full flex flex-col items-start gap-10 xl:flex-row">
        {/* cart */}
        <CartInfo />
        {/* Order summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
