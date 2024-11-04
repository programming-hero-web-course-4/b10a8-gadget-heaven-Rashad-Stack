import { useSearchParams } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  const [searchParam] = useSearchParams();
  const categoryParams = searchParam.get("category");

  const { state } = useGlobalState();
  const { products = [] } = state || {};

  console.log(products);

  return (
    <div className="grid flex-1 gap-4 rounded-xl max-sm:px-2 sm:grid-cols-2 lg:grid-cols-3">
      {products.length > 0 &&
        products
          .filter(
            (product) => product.category === categoryParams || !categoryParams,
          )
          .map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
    </div>
  );
}
