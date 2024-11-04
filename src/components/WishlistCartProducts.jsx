import { HiAdjustmentsVertical } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

export default function WishlistCartProducts() {
  const [searchParam] = useSearchParams();
  const activeTab = searchParam.get("tab") || "cart";

  return (
    <section className="mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="flex items-center justify-center gap-5">
            <h2 className="text-xl font-semibold">Total cost: 999.99</h2>
            <div className="flex justify-center gap-5">
              <Button type="gradient-outline">
                Sort by Price <HiAdjustmentsVertical />
              </Button>
              <Button type="gradient">Purchase</Button>
            </div>
          </div>
        </div>
        {activeTab === "wishlist" && <Wishlist />}
        {activeTab === "cart" && <Cart />}
      </div>
    </section>
  );
}
