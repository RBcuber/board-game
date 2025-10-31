import { ProductCard } from "@/components/product-card/product-card";
import { Product } from "@/types/Products";

const ProductsServerVersion = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  return (
    <div className="container mx-auto py-8 ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: Product) => (
          <li key={p.id} className="col-span-1">
            <div className="group rounded-lg bg-card text-card-foreground ring-1 ring-ring hover:shadow-lg transition-shadow">
              <ul>
                <ProductCard product={p} variant="defoult" />
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsServerVersion;
