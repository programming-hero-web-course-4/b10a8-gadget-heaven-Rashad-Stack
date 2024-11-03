import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ to, type = "default", children }) {
  return (
    <Link
      to={to}
      className={`${type === "outline" ? "outline-brand text-brand hover:bg-brand hover:text-base-100 outline outline-offset-0" : "bg-base-100 text-brand"} rounded-full px-6 py-2 text-center font-semibold`}
    >
      {children}
    </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};
