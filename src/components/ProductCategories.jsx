import { useSearchParams } from "react-router-dom";
import { productsCategory } from "../data";

export default function ProductCategories() {
  const [searchParam, setSearchParam] = useSearchParams();
  const categoryParams = searchParam.get("category");

  function handleCategoryClick(category) {
    searchParam.set("category", category);
    if (!searchParam.get("category")) {
      searchParam.delete("category");
    }
    setSearchParam(searchParam);
  }

  return (
    <ul className="fle w-full space-y-3 rounded-xl bg-white p-4 max-sm:mx-2 md:w-60">
      <li
        className={`${!categoryParams ? "bg-brand text-white" : "bg-base-300 text-gray-600"} rounded-full text-sm`}
      >
        <button
          className="block h-full w-full px-6 py-3 text-left"
          onClick={() => handleCategoryClick("")}
        >
          All Products
        </button>
      </li>

      {productsCategory.map((category) => (
        <li
          key={category.name}
          className={`${categoryParams === category.category ? "bg-brand text-white" : "bg-base-300 text-gray-600"} rounded-full text-sm`}
        >
          <button
            className="block h-full w-full px-6 py-3 text-left"
            onClick={() => handleCategoryClick(category.category)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
