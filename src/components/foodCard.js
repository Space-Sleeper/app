import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { SvgLoader, SvgProxy } from "react-svgmt";
import IconArrow from "../assets/arrow.svg";
import { Card } from "ui-neumorphism";

import Styles from "./foodCard.module.css";

export default function FoodCard({ imgUrl, name, id }) {
  const history = useHistory();

  const nameArray = name.split("");
  nameArray.length = 10;

  const handleClickDetail = () => {
    history.push(`/foods/${id}`);
  };

  return (
    <Card rounded>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        onClick={handleClickDetail}
        className={Styles.container}
      >
        <div className={Styles.floatingSection}>
          <p className={Styles.name}>
            {nameArray.join("")}
            {nameArray.length < name.split("").length ? "..." : ""}
          </p>
          <div className={Styles.arrow}>
            <SvgLoader path={IconArrow} style={{ width: 32, heigth: 32 }}>
              <SvgProxy />
            </SvgLoader>
          </div>
        </div>
      </div>
    </Card>
  );
}

FoodCard.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
