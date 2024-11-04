import useGlobalState from "../hooks/useGlobalState";
import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  const { state } = useGlobalState();
  const { wishlist } = state || {};

  return (
    <div className="mt-5 space-y-5">
      {wishlist.length > 0 &&
        wishlist.map((product) => (
          <WishlistCard key={product.product_id} product={product} />
        ))}
    </div>
  );
}
