import { ProductCard } from "@/components/product-card/product-card";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return (
    <div className="p-20">
      <ProductCard product={product} variant="with-back-btn" />
    </div>
  );
}
