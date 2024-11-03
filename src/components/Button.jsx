import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({
  to,
  type = "default",
  children,
  handleClick,
}) {
  const variant = {
    default: "bg-base-100 text-brand",
    outline:
      "outline-brand text-brand hover:bg-brand hover:text-base-100 outline outline-offset-0",
    primary: "bg-brand text-base-100 text-sm",
  };

  return to ? (
    <Link
      to={to}
      className={`${variant[type]} flex items-center justify-center gap-2 rounded-full px-6 py-2 text-center font-semibold transition-transform active:scale-95`}
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
  handleClick: PropTypes.func,
};
