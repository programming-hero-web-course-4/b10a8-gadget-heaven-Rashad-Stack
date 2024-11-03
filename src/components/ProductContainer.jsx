import ProductCard from "./ProductCard";

export default function ProductContainer() {
  return (
    <div className="grid flex-1 gap-4 rounded-xl max-sm:px-2 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
