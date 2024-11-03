import ProductCategories from "./ProductCategories";
import ProductContainer from "./ProductContainer";

export default function Products() {
  return (
    <section className="-mt-40" id="products">
      <div className="container mx-auto max-w-7xl">
        <h1 className="py-4 text-center text-xl font-bold lg:text-4xl">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex flex-wrap gap-5">
          <ProductCategories />

          <ProductContainer />
        </div>
      </div>
    </section>
  );
}
