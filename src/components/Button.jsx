import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ to, children }) {
  return (
    <Link
      to={to}
      className="bg-base-100 text-brand rounded-full px-6 py-2 text-center font-semibold"
    >
      {children}
    </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
