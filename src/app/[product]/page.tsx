import AlsoLike from "@/components/product-page/also-like-section";
import ProductInfoScetion from "@/components/product-page/product-info-section";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const res = await fetch(
    `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${id}%22){id%20title%20description%20featuredImage%20{id%20url}}}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  const data: ProductResponse = await res.json();

  if (!data.data || !data.data.product) {
    return notFound();
  }
  //  console.log(data);
  return data;
}

interface Params {
  product: string;
}

interface FeaturedImage {
  id: string;
  url: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
}

interface ProductResponse {
  data: {
    product: Product | null;
  };
}

const ProductPage = async ({ params }: { params: Params }) => {
  const data = await getData(params.product);

  const { title, description, featuredImage } = data.data.product!;
  return (
    <div className="mt-5 xl:mt-20 w-full min-h-screen">
      <ProductInfoScetion
        title={title}
        description={description}
        picture={featuredImage.url}
      />
      <AlsoLike />
    </div>
  );
};

export default ProductPage;
