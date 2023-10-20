import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

import Swal from "sweetalert2";
const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("logout successfully!");
        navigate("/");
        console.log("user logged out");
      })
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Add Products</NavLink>
      </li>
      <li>
        <NavLink to="/errorpage">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">urbanElegance</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {users ? (
          <>
            <span>{users.email}</span>
            <Link onClick={handleLogOut} to="/login" className="btn">
              logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="btn">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
