import LOGO from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../hooks/useNetworkStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const networkStatus = useNetworkStatus();

  const isLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center shadow-sm shadow-gray-500">
      <Link to="/">
        <img className="m-4 w-16 rounded-md" src={LOGO} alt="logo" />
      </Link>
      <ul className="flex flex-col mr-4 sm:flex-row sm:space-x-4">
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
          <button onClick={isLogin}>
            {login}{" "}
            <span
              className={`${
                networkStatus === false ? "text-red-500" : "text-green-500"
              }`}
            >
              ●
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
