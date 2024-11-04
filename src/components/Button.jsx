import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({
  to,
  type = "default",
  children,
  handleClick,
  className,
}) {
  const variant = {
    default: "bg-base-100 text-brand",
    outline: "bg-transparent text-brand border-2 border-brand",
    primary: "bg-brand text-base-100 text-sm",
    "outline-base":
      "border border-base-100 text-base-100 text-sm bg-transparent",
    gradient: "bg-gradient-to-t from-[#DE5DDC] to-brand text-white",
    "gradient-outline": "bg-transparent text-brand border-2 border-brand",
  };

  return to ? (
    <Link
      to={to}
      className={`${variant[type]} ${className} flex items-center justify-center gap-2 rounded-full px-6 py-2 text-center font-semibold transition-transform active:scale-95`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className={`${variant[type]} flex items-center justify-center gap-2 rounded-full px-6 py-2 text-center font-semibold transition-transform active:scale-95`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};
