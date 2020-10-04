import React from "react";
import FoodCard from "../components/foodCard";
import { foodList as initFoodList } from "../dummy";
import Margin from "../components/margin";

export default function FoodList() {
  return (
    <div style={{ padding: 24 }}>
      {initFoodList.map((props) => (
        <>
          <FoodCard {...props} key={props.id} />
          <Margin height={20} />
        </>
      ))}
    </div>
  );
}
