import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { PageRoute } from "./route";
import HomePage from "./pages/Home";
import SleepPage from "./pages/Sleep";
import AccountPage from "./pages/Account";
import FoodDetailPage from "./pages/FoodDetail";
import Footer from "./components/footer";
import { overrideThemeVariables } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Theme from "./theme";

import IconAccount from "./assets/account-icon.svg";
import IconDish from "./assets/dish-icon.svg";
import IconBed from "./assets/bed-icon.svg";

import "./App.css";

function App() {
  const history = useHistory();

  useEffect(() => {
    overrideThemeVariables(Theme);
  }, []);

  const handleClickFood = () => {
    history.push(PageRoute.Index);
  };

  const handleClickSleep = () => {
    history.push(PageRoute.Sleep);
  };

  const handleClickAccount = () => {
    history.push(PageRoute.Account);
  };

  // const handleClickFoodDetail = () => {
  //   history.push(PageRoute.FoodDetail);
  // };

  const ToolBarDatas = [
    { iconUrl: IconDish, onClick: handleClickFood, href: PageRoute.Index },
    { iconUrl: IconBed, onClick: handleClickSleep, href: PageRoute.Sleep },
    {
      iconUrl: IconAccount,
      onClick: handleClickAccount,
      href: PageRoute.Account,
    },
  ];

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
        <Footer ToolBarDatas={ToolBarDatas} />
      </div>
    </div>
  );
}

export default App;
