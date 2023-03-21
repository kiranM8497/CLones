import React from "react";
import "./Header.css";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import amazonlogo from "./img/amazonlogo.png";
// import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* <Link to="/home">
        <img className="header-logo" src={amazonlogo} alt="amazon-logo" />
      </Link> */}

      <a href="/home">
        <img className="header-logo" src={amazonlogo} alt="amazon-logo" />
      </a>

      <div className="header-search">
        <input type="text" className="header-searchInput"></input>
        <SearchIcon className="header-search-icon" />

        {/* logo */}
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello guest</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo"> & Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne"> Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <a className="header-optionBasket" href="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">

              {basket?.length}

            </span>
          </div>
        </a>

        {/* <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">0</span>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
