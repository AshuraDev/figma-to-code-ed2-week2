"use client";

import useSWR from "swr";
import { Button } from "../ui/button";

interface CollectionNode {
  id: string;
  title: string;
  productsCount: number;
}

interface CollectionEdge {
  node: CollectionNode;
}

interface CollectionsResponse {
  data: {
    collections: {
      edges: CollectionEdge[];
    };
  };
}

const fetcher = async (url: string): Promise<CollectionsResponse> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{ collections(first: 3) { edges { node { id title } } } }`,
    }),
  });
  return response.json();
};

const CategoriesFilter = () => {
  const { data, error } = useSWR<CollectionsResponse>(
    "https://mock.shop/api",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div className="w-full flex flex-row flex-wrap items-center justify-center p-0 gap-2 mb-9">
        <div className="bg-slate-100 rounded-full w-20 h-9"/>
        <div className="bg-slate-100 rounded-full w-20 h-9"/>
        <div className="bg-slate-100 rounded-full w-20 h-9"/>
        <div className="bg-slate-100 rounded-full w-20 h-9"/>
      </div>
    );

  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-center p-0 gap-2 mb-9">
      <Button className="flex flex-row items-center py-2 px-3 gap-2 bg-color_4 rounded-full border-color_4 border-2 font-medium text-white text-sm hover:bg-color_4">
        All <span>132</span>
      </Button>
      {data.data.collections.edges.map((edge) => (
        <Button
          key={edge.node.id}
          className="flex flex-row items-center py-2 px-3 gap-2 bg-white rounded-full border-color_4 border-2 font-medium text-color_4 text-sm hover:bg-color_1"
        >
          {edge.node.title}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesFilter;
