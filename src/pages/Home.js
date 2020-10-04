/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import ImageCurry from "../assets/curry.jpg";
import Margin from "../components/margin";
import FoodCard from "../components/foodCard";
import { Button, Dialog, Card } from "ui-neumorphism";
import { foodList as initFoodList } from "../dummy";
import PropTypes from "prop-types";
import { recommendation } from "../utils";
import { ateHistory } from "../";
import IconCheck from "../assets/Vector.svg";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { PageRoute } from "../route";
import { useHistory } from "react-router-dom";

import Styles from "./Home.module.css";

export default function HomePage({ canTakeCalorie }) {
  const history = useHistory();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [recommend, setRecommend] = useState(
    recommendation({ canTakeCalorie, alreadyTakenCalorie: 0 })
  );

  const data = initFoodList;
  data.length = 2;

  useEffect(() => {
    const alreadyTakenCalorieJson = localStorage.getItem("alreadyTakenCalorie");
    const alreadyTakenCalorie = JSON.parse(alreadyTakenCalorieJson);
    const ateJson = localStorage.getItem("ate");
    const ate = JSON.parse(ateJson || "[]");
    setRecommend(recommendation({ canTakeCalorie, alreadyTakenCalorie, ate }));
  }, [isDialogVisible, canTakeCalorie]);

  const handleOpenDialog = () => {
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  const handleClickFoodList = () => {
    history.push(PageRoute.FoodList);
  };

  const handleClickEat = () => {
    const id = recommend.data.id;
    const foodListJson = localStorage.getItem("foodList");
    if (!foodListJson) {
      localStorage.setItem("foodList", JSON.stringify(initFoodList));
    }
    const foodList = JSON.parse(foodListJson);

    const newFoodList = foodList.map((food) => {
      if (food.id === id) {
        food.stocked -= 1;
        const alreadyTakenCalorieJson = localStorage.getItem(
          "alreadyTakenCalorie"
        );
        const alreadyTakenCalorie = JSON.parse(alreadyTakenCalorieJson);
        const data = {
          calorie: alreadyTakenCalorie.calorie + food.calorie,
          count: alreadyTakenCalorie.count + 1,
          date: new Date(),
        };

        localStorage.setItem("foodList", JSON.stringify(data));
      }
      return food;
    });
    localStorage.setItem("foodList", JSON.stringify(newFoodList));

    const ateJson = localStorage.getItem("ate");
    if (!ateJson) {
      localStorage.setItem("ate", JSON.stringify([id]));
    } else {
      const ate = JSON.parse(ateJson);
      localStorage.setItem(
        "ate",
        JSON.stringify([...ate.slice(-1 * (ateHistory - 1)), id])
      );
    }

    handleCloseDialog();
  };

  return (
    <div className={Styles.container}>
      <Margin height={20} />
      <h1 className={Styles.title}>
        Next
        <br />
        Recommend
      </h1>
      <Margin height={40} />
      <section className={Styles.recommendation}>
        {recommend.ok && (
          <>
            <div
              style={{
                backgroundImage: `url(${recommend?.data?.imgUrl || ""})`,
              }}
              className={Styles.Image}
            />
            <div className={Styles.eatButton}>
              <Button
                color="var(--primary)"
                style={{
                  fontSize: 20,
                  padding: "0 40px",
                  "--btn-height": "44px",
                  fontWeight: 600,
                }}
                onClick={handleOpenDialog}
                rounded
              >
                Eat
              </Button>
            </div>
          </>
        )}
        {!recommend.ok && (
          <>
            <h1 className={Styles.enough}>You ate enough today</h1>
            <Margin height={40} />
            <SvgLoader
              path={IconCheck}
              style={{ width: 60, heigth: 60 }}
              id="wrap_all"
            >
              <SvgProxy />
            </SvgLoader>
          </>
        )}
      </section>
      <Margin height={20} />
      <section>
        <h2 className={Styles.subtitle}>Food List</h2>
        <Margin height={20} />
        <div>
          {data.map((props) => (
            <>
              <FoodCard {...props} key={props.id} />
              <Margin height={20} />
            </>
          ))}
        </div>
        <div className={Styles.moreButton}>
          <Button
            color="var(--primary)"
            style={{
              fontSize: 20,
              padding: "0 52px",
              "--btn-height": "40px",
              fontWeight: 600,
            }}
            rounded
            onClick={handleClickFoodList}
          >
            More
          </Button>
        </div>
      </section>
      <Dialog visible={isDialogVisible} onClose={handleCloseDialog}>
        <Card minWidth={300} style={{ padding: "60px 24px" }}>
          <p className={Styles.dialogTitle}>
            Record what you eat.
            <br /> Is it okay?
          </p>
          <Margin height={160} />
          <div className={Styles.dialogButtons}>
            <Button onClick={handleCloseDialog} color="var(--error)" rounded>
              No
            </Button>
            <Button onClick={handleClickEat} color="var(--primary)" rounded>
              Sure
            </Button>
          </div>
        </Card>
      </Dialog>
    </div>
  );
}

HomePage.propTypes = {
  canTakeCalorie: PropTypes.number,
};
