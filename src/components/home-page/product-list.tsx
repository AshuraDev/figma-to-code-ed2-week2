"use client";

import { useState, useEffect } from "react";
import Card from "../card";
import { Button } from "../ui/button";

async function getData() {
  const request = await fetch(
    "https://mock.shop/api?query={products(first:6){edges{node{id title featuredImage{id url} variants(first:3){edges{node{price{amount currencyCode}}}}}}}}"
  );

  if (!request.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await request.json();
  return response;
}

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData()
      .then((data) => {
        const productEdges = data.data.products.edges;
        const firstSixProducts = productEdges.map((edge: any) => edge.node);
        setProducts(firstSixProducts);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 w-full">
        {products.map((product, index) => {
          const firstVariant = product.variants.edges[0]?.node;
          const price = firstVariant
            ? `${firstVariant.price.amount} ${firstVariant.price.currencyCode}`
            : "N/A";

          return (
            <Card
              key={product.id}
              index={index}
              picture={product.featuredImage?.url}
              title={product.title}
              price={price}
            />
          );
        })}
      </div>
      <div className="w-full mt-8 flex items-center justify-center">
        <Button className="flex flex-row justify-center items-center py-3 px-5 gap-2 border-2 border-color_4 rounded-full font-semibold text-sm text-color_4 bg-transparent hover:bg-transparent">View More</Button>
      </div>
    </div>
  );
};

export default ProductList;
