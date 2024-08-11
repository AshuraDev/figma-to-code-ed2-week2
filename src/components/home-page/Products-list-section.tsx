import React from "react";
import CategoriesFilter from "./categories-filter";
import ProductList from "./product-list";

const ProductListSection = () => {
  return (
    <div className="flex flex-col items-center p-0 gap-9 w-full overflow-hidden">
      <CategoriesFilter />
      <ProductList />
    </div>
  );
};

export default ProductListSection;
