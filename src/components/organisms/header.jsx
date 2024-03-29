import React, { useContext } from "react";
import classNames from "classnames";
import Title from "../atoms/title";
import Cart from "../atoms/cart";
import Account from "../atoms/account";
import SidebarProduct from "./sidebarProduct";
import CartContext from "../../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import customToast from "../atoms/toast";
import HomeComponent from "../atoms/home";

const Header = ({ className }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className={classNames(
        className,
        "flex flex-row md:flex-col justify-between px-4 h-90-per items-center gap-x-5"
      )}
    >
      <Title fullTitle={import.meta.env.VITE_APP_PROJECT_TITLE} />
      <SidebarProduct />
      <div className="flex justify-around gap-x-5 md:gap-x-10">
        {location.pathname === "/cart" ? (
          <HomeComponent onClick={(e) => navigate("/")} />
        ) : (
          <Cart
            onClick={() => {
              navigate("/cart");
              customToast("Cart is under development", "info");
            }}
            badgeCount={cart?.length}
          />
        )}
        <Account />
      </div>
    </div>
  );
};

export default Header;
