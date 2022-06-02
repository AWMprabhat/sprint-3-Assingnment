import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) {
            logout();
          } else {
            login("R", "Z");
            console.log("R", "Z");
          }
        }}
      >
        {" "}
        {isAuthorized ? "Logout" : "Login"}{" "}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}> {`Switch To ${isLight? "Dark Mode" : "Light Mode"}  `} </button>
      <Wishlist />
    </div>
  );
};

export default Navbar;
