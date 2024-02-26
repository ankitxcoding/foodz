import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const isLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <div className="m-4 flex justify-between items-center border-b-2 border-black">
      <img className="m-4 w-16" src={LOGO} alt="logo" />
      <ul className="flex">
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          Home
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          About Us
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          Contact Us
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          Account
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          Cart
        </li>
        <li className="m-4 font-bold text-lg px-2 py-1 hover:cursor-pointer">
          <button onClick={isLogin}>{login}</button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
