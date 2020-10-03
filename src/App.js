import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { PageRoute } from "./route";
import HomePage from "./pages/Home";
import SleepPage from "./pages/Sleep";
import AccountPage from "./pages/Account";
import FoodDetailPage from "./pages/FoodDetail";

import "./App.css";

function App() {
  // const history = useHistory();

  // const handleClickFood = () => {
  //   history.push(PageRoute.Index);
  // };

  // const handleClickSleep = () => {
  //   history.push(PageRoute.Sleep);
  // };

  // const handleClickAccount = () => {
  //   history.push(PageRoute.Account);
  // };

  // const handleClickFoodDetail = () => {
  //   history.push(PageRoute.FoodDetail);
  // };

  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path={PageRoute.Index}>
            <HomePage />
          </Route>
          <Route exact path={PageRoute.Sleep}>
            <SleepPage />
          </Route>
          <Route exact path={PageRoute.Account}>
            <AccountPage />
          </Route>
          <Route exact path={PageRoute.FoodDetail}>
            <FoodDetailPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
