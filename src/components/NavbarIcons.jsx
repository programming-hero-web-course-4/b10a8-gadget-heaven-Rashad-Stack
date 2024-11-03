import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavbarIcons({ total, children }) {
  return (
    <Link className="relative rounded-full bg-white p-2 text-sm md:p-3 md:text-lg">
      {total > 0 && (
        <span className="top- absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-center text-xs text-white md:h-6 md:w-6">
          {total}
        </span>
      )}
      {/* <HiOutlineShoppingCart /> */}
      {children}
    </Link>
  );
}

NavbarIcons.propTypes = {
  children: PropTypes.node,
  total: PropTypes.number,
};
