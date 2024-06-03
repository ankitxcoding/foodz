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
    <div className="flex flex-col sm:flex-row items-center sm:justify-between px-10 sm:px-4 py-2 shadow-sm shadow-gray-500">
      <Link to="/">
        <img className="m-4 w-16 rounded-md" src={LOGO} alt="logo" />
      </Link>
      <ul className="flex justify-center flex-wrap">
        <li className="m-4 text-black font-bold text-lg hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link to="/">Home</Link>
        </li>
        <li className="m-4 text-black font-bold text-lg hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link to="/about">About</Link>
        </li>
        <li className="m-4 text-black font-bold text-lg hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="m-4 text-black font-bold text-lg hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link to="cart">Cart</Link>
        </li>
        <li className="m-4 text-black font-bold text-lg hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
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
