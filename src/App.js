import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { PageRoute } from "./route";
import HomePage from "./pages/Home";
import SleepPage from "./pages/Sleep";
import AccountPage from "./pages/Account";
import FoodDetailPage from "./pages/FoodDetail";
import FoodListPage from "./pages/foodList";
import Footer from "./components/footer";
import { overrideThemeVariables } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Theme from "./theme";
import { foodList } from "./dummy";
import { calcCalorie } from "./utils";

import IconAccount from "./assets/account-icon.svg";
import IconDish from "./assets/dish-icon.svg";
import IconBed from "./assets/bed-icon.svg";

import "./App.css";

function App() {
  const history = useHistory();
  const bodyRef = useRef();
  const [canTakeCalorie, setCanTakeCalorie] = useState(0);

  useEffect(() => {
    overrideThemeVariables(Theme);

    const foodListJson = localStorage.getItem("foodList");
    if (!foodListJson) {
      localStorage.setItem("foodList", JSON.stringify(foodList));
    }

    const alreadyTakenCalorieJson = localStorage.getItem("alreadyTakenCalorie");
    if (!alreadyTakenCalorieJson) {
      localStorage.setItem(
        "alreadyTakenCalorie",
        JSON.stringify({
          calorie: 0,
          date: new Date(),
          count: 0,
        })
      );
    } else {
      const alreadyTakenCalorie = JSON.stringify(alreadyTakenCalorieJson);

      const now = new Date();
      const last = new Date(alreadyTakenCalorie.date);
      if (
        now.getFullYear() === last.getFullYear() &&
        now.getMonth() === last.getMonth() &&
        now.getDate() === last.getDate()
      ) {
        console.log("ok");
      } else {
        localStorage.setItem(
          "alreadyTakenCalorie",
          JSON.stringify({
            calorie: 0,
            date: new Date(),
            count: 0,
          })
        );
      }
    }

    const age = localStorage.getItem("age");
    const height = localStorage.getItem("height");
    const weight = localStorage.getItem("weight");

    setCanTakeCalorie(calcCalorie({ weight, height, age }));
    console.log(calcCalorie({ weight, height, age }));
  }, []);

  useLayoutEffect(() => {
    if (window.innerHeight - 60 < bodyRef.current.clientHeight) {
      bodyRef.current.style.paddingBottom = "100px";
    }
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
    <div className="App" ref={bodyRef}>
      <div>
        <Switch>
          <Route exact path={PageRoute.Index}>
            <HomePage canTakeCalorie={canTakeCalorie} />
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
          <Route exact path={PageRoute.FoodList}>
            <FoodListPage />
          </Route>
        </Switch>
        <Footer ToolBarDatas={ToolBarDatas} />
      </div>
    </div>
  );
}

export default App;
