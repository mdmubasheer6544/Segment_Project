import React from "react";
import mystyles from "./news.module.css";

import MainEvent from "../Task02/MainEvevnt";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className={mystyles.naveContainer}>
          <ul>
            <li>MainEvent</li>
          </ul>
          <div>
            <input type="text" className={mystyles.searchInput} />
            <input
              type="button"
              className={mystyles.searchBtn}
              value="Search"
            />
          </div>
        </div>

        <MainEvent />
      </>
    );
  }
}

export default Menu;
