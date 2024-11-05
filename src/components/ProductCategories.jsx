import { Link, useLocation } from "react-router-dom";
import { productsCategory } from "../data";

export default function ProductCategories() {
  const { pathname } = useLocation();
  const path = pathname.substring(1);

  return (
    <ul className="fle w-full space-y-3 rounded-xl bg-white p-4 max-sm:mx-2 md:w-60">
      <li
        className={`${!path ? "bg-brand text-white" : "bg-base-300 text-gray-600"} rounded-full text-sm`}
      >
        <Link to="/" className="block h-full w-full px-6 py-3 text-left">
          All Products
        </Link>
      </li>

      {productsCategory.map((category) => (
        <li
          key={category.name}
          className={`${path === category.category ? "bg-brand text-white" : "bg-base-300 text-gray-600"} rounded-full text-sm`}
        >
          <Link
            to={category.category}
            className="block h-full w-full px-6 py-3 text-left"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
