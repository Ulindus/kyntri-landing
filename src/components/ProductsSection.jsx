import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ProductsSection() {
  return (
    <section className="bg-[#0f1420] py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductsSection;