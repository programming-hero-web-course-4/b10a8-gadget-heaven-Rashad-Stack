import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data";
import NavbarIcons from "./NavbarIcons";

export default function Navbar() {
  return (
    <nav className="bg-brand outline-base-300 mt-2 rounded-t-xl -outline outline-offset-2 sm:p-5 md:mx-3 lg:mx-10">
      <div className="container mx-auto max-w-7xl">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-2 text-white md:text-xl lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <Link className="text-nowrap text-sm font-semibold text-white md:text-xl">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item) => (
                <li key={item.name} className="text-white">
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            <NavbarIcons total={3}>
              <HiOutlineShoppingCart />
            </NavbarIcons>

            <NavbarIcons total={5}>
              <HiOutlineHeart />
            </NavbarIcons>
          </div>
        </div>
      </div>
    </nav>
  );
}
