import React from "react";
import ImageCurry from "../assets/curry.jpg";
import Margin from "../components/margin";
import FoodCard from "../components/foodCard";
import { Button } from "ui-neumorphism";
import { foodList } from "../dummy";

import Styles from "./Home.module.css";

export default function HomePage() {
  const data = foodList;
  data.length = 2;

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
        <div
          style={{ backgroundImage: `url(${ImageCurry})` }}
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
            rounded
          >
            Eat
          </Button>
        </div>
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
          >
            More
          </Button>
        </div>
      </section>
    </div>
  );
}
