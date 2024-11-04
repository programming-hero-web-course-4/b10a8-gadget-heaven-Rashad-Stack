import { useSearchParams } from "react-router-dom";
import Cart from "./Cart";
import CartHeader from "./CartHeader";
import Wishlist from "./Wishlist";

export default function WishlistCartProducts() {
  const [searchParam] = useSearchParams();
  const activeTab = searchParam.get("tab") || "cart";

  return (
    <section className="mt-10">
      <div className="container mx-auto max-w-7xl">
        <CartHeader />
        {activeTab === "wishlist" && <Wishlist />}
        {activeTab === "cart" && <Cart />}
      </div>
    </section>
  );
}
