import { HiXMark } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";

export default function WishlistCard() {
  const [searchParam] = useSearchParams();
  const activeTab = searchParam.get("tab");

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="p-5">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
          className="max-h-40 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Samsung Galaxy S23 Ultra</h2>
        <p className="flex-grow-0 text-gray-500">
          Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
          display.
        </p>
        <p className="flex-grow-0 font-semibold text-gray-600">
          Price: $ 999.99
        </p>
        {activeTab === "wishlist" && (
          <Button type="primary">Add to Cart</Button>
        )}
      </div>

      <div className="card-actions p-5">
        <button className="rounded-full border border-red-500 p-1 text-xl text-red-500 active:scale-95">
          <HiXMark />
        </button>
      </div>
    </div>
  );
}
