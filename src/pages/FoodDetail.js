import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Margin from "../components/margin";
import { Fab } from "ui-neumorphism";
import { PageRoute } from "../route";

import { foodList } from "../dummy";

import Styles from "./FoodDetail.module.css";

export default function FoodDetailPage() {
  const { id: foodId } = useParams();
  const history = useHistory();

  const data = foodList.filter(({ id }) => id === parseInt(foodId))[0];

  const handleClickBack = () => {
    history.push(PageRoute.Index);
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.name}>{data.name}</h1>
      <Margin height={40} />
      <div className={Styles.imgWrapper}>
        <img src={data.imgUrl} alt="food" className={Styles.image} />
      </div>
      <Margin height={40} />
      <section>
        <h2 className={Styles.subtitle}>Nutorition</h2>
        <Margin height={20} />
        <div className={Styles.nutorition}>
          <p className={Styles.nutoritionTitle}>Calorie</p>
          <p className={Styles.nutoritionDetail}>
            {data.nutorition.calorie}kcal
          </p>
        </div>
        <Margin height={12} />
        <div className={Styles.nutorition}>
          <p className={Styles.nutoritionTitle}>Vitamin D</p>
          <p className={Styles.nutoritionDetail}>
            {data.nutorition.vitaminD}mg
          </p>
        </div>
      </section>
      <Margin height={40} />
      <section>
        <h2 className={Styles.subtitle}>Description</h2>
        <Margin height={20} />
        <p className={Styles.description}>{data.description}</p>
      </section>
      <Margin height={20} />
      <section>
        <div className={Styles.backButton}>
          <Fab onClick={handleClickBack}>
            <span style={{ fontSize: "20px" }}>&lt;</span>
          </Fab>
        </div>
      </section>
    </div>
  );
}
