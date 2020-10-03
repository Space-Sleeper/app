import React from "react";
import ImageCurry from "../assets/curry.jpg";
import Margin from "../components/margin";
import { Button } from "ui-neumorphism";

import Styles from "./Home.module.css";

export default function HomePage() {
  console.log(ImageCurry);

  return (
    <div className={Styles.contaner}>
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
              "--btn-height": "60px",
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
      </section>
    </div>
  );
}
