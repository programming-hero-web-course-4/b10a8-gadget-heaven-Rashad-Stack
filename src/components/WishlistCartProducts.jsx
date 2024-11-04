import { HiAdjustmentsVertical } from "react-icons/hi2";
import Button from "./Button";

export default function WishlistCartProducts() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl">
        <div>
          <h1 className="">Cart</h1>
          <div>
            <h2>Total cost: 999.99</h2>
            <div>
              <Button type="gradient">
                Sort by Price <HiAdjustmentsVertical />
              </Button>
              <Button type="gradient-outline">Purchase</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
