import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";
import FloatSection from "../components/FloatSection";
import Hero from "../components/Hero";

export default function ProductDetails() {
  return (
    <>
      <Hero
        title="Product Details"
        description="Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!"
        className="pb-40"
      />
      <FloatSection>
        <div className="card bg-base-100 shadow-xl lg:card-side">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title">Samsung Galaxy S23 Ultra</h2>
            <p className="flex-grow-0 font-semibold text-gray-700">
              Price: $99.99
            </p>
            <span className="w-fit rounded-full border border-success bg-success/15 px-4 py-2 text-sm font-semibold text-success">
              In Stock
            </span>
            <p className="flex-grow-0 text-sm text-gray-600">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <div className="space-y-3">
              <p className="flex-grow-0 text-sm font-semibold text-gray-700">
                Specification:
              </p>
              <ol className="ml-5 list-decimal space-y-2 text-sm text-gray-600">
                <li>Intel i7 11th Gen</li>
                <li>16GB RAM</li>
                <li>512GB SSD</li>
                <li>Touchscreen</li>
              </ol>
            </div>

            <div>
              <p className="flex-grow-0 text-sm font-semibold text-gray-700">
                Rating:
              </p>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  size={30}
                  activeColor="#ffd700"
                  isHalf={true}
                  value={4.8}
                  edit={false}
                />
                <span className="rounded-full bg-base-300 px-3 py-1 text-sm">
                  4.8
                </span>
              </div>
            </div>

            <div className="card-actions items-center">
              <Button type="primary">
                Add To Card <HiOutlineShoppingCart className="text-xl" />
              </Button>
              <button className="rounded-full border p-2 text-xl transition-transform active:scale-75">
                <HiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </FloatSection>
    </>
  );
}
