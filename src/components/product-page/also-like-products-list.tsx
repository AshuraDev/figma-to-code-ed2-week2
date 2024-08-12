"use client";

import { useState, useEffect } from "react";
import Card from "../card";

async function getData() {
  const request = await fetch(
    "https://mock.shop/api?query={products(first:4){edges{node{id title featuredImage{id url} variants(first:3){edges{node{price{amount currencyCode}}}}}}}}"
  );

  if (!request.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await request.json();
  return response;
}
const AlsoLikeProducts = () => {
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 w-full">
        {products.map((product, index) => {
          const firstVariant = product.variants.edges[0]?.node;
          const price = firstVariant
            ? `${firstVariant.price.amount} ${firstVariant.price.currencyCode}`
            : "N/A";
          const split_id = product.id.split("/").pop();

          return (
            <Card
              key={product.id}
              id={split_id}
              index={null}
              picture={product.featuredImage?.url}
              title={product.title}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlsoLikeProducts;
