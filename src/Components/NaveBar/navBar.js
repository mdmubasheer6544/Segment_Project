import React from "react";
import mystyles from "./news.module.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import MainEvent from "../Task02/MainEvevnt";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className={mystyles.naveContainer}>
          <ul>
            <li>
              <Link to="/MainEvent" className={mystyles.links}>
                MainEvent
              </Link>
            </li>
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
        <Switch>
          <Route exact path="/MainEvent" component={MainEvent} />
          <Route exact path="/" component={MainEvent} />
        </Switch>
      </>
    );
  }
}

export default Menu;
