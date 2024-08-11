import Link from "next/link";
import React from "react";

const LinksSection = () => {
  //
  const Products = ["Jacket", "T-Shirt", "Jacket", "Shoes", "Sunglasses"];
  const Categories = ["Man", "Woman", "Kids", "Gift", "New arrival"];
  const Socials = ["Instagram", "Facebook", "Youtube", "X"];
  const titleStyles = "text-base font-medium text-white";
  const linksStyles = "text-sm text-color_2";
  //
  return (
    <div className="flex flex-row p-0 gap-10">
      <div className="flex flex-col items-start p-0 gap-2">
        <h3 className={titleStyles}>Product</h3>
        {Products.map((product, i) => (
          <Link href={"#"} key={i} className={linksStyles}>
            {product}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start p-0 gap-2">
        <h3 className={titleStyles}>Categories</h3>
        {Categories.map((category, i) => (
          <Link href={"#"} key={i} className={linksStyles}>
            {category}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start p-0 gap-2">
        <h3 className={titleStyles}>Our Social Media</h3>
        {Socials.map((social, i) => (
          <Link href={"#"} key={i} className={linksStyles}>
            {social}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
