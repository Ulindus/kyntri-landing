import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ProductsSection() {
  return (
    <section className="bg-[#0f1420] py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            OUR PLATFORMS
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Products We've
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Built & Shipped
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Beyond client work, we build and operate our own platforms — real
            products solving real operational problems across retail, events,
            automotive, and AI.
          </p>
        </div>

        {/* Product Cards */}
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