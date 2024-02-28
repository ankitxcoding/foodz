import LOGO from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const isLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <div className="flex justify-between items-center shadow-sm shadow-gray-500">
      <Link to="/">
        <img className="m-4 w-16 rounded-md" src={LOGO} alt="logo" />
      </Link>
      <ul className="flex">
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          <Link to="cart">Cart</Link>
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          <button onClick={isLogin}>{login}</button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
