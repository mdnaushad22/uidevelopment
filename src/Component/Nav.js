import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetLogoutUser } from "../redux/loggedUserAction";
const Nav = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    dispatch(resetLogoutUser());
    navigate("/signup");

  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to={"/"}>Product</Link>
          </li>
          <li>
            <Link to={"/add"}>Add Product</Link>
          </li>
          <li>
            <Link to={"/update"}>Update Product</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/addproduct"}>Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to={"/signup"}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-align">
          <>
            <li>
                <Link to={"/signup"}>Sign Up</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
          </>
        </ul>
      )}
    </div>
  );
};
export default Nav;
