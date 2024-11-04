import { HiAdjustmentsVertical } from "react-icons/hi2";
import useGlobalState from "../hooks/useGlobalState";
import Button from "./Button";

export default function CartHeader() {
  const { state, dispatch } = useGlobalState();
  const { cart } = state || {};

  const totalCost = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex items-center justify-center gap-5">
        <h2 className="text-xl font-semibold">Total cost: {totalCost}</h2>
        <div className="flex justify-center gap-5">
          <Button
            type="gradient-outline"
            handleClick={() => dispatch({ type: "SORT_BY_PRICE" })}
          >
            Sort by Price <HiAdjustmentsVertical />
          </Button>
          <Button type="gradient">Purchase</Button>
        </div>
      </div>
    </div>
  );
}
