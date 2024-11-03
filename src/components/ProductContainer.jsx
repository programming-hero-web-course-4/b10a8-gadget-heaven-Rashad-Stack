import ProductCard from "./ProductCard";

export default function ProductContainer() {
  return (
    <div className="grid flex-1 gap-4 rounded-xl sm:grid-cols-2 md:grid-cols-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
