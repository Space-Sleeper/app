import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { IconButton } from "ui-neumorphism";
import { SvgLoader, SvgProxy } from "react-svgmt";

import Styles from "./footer.module.css";

export default function Footer({ ToolBarDatas }) {
  const location = useLocation();

  return (
    <footer className={Styles.footer}>
      {ToolBarDatas.map(({ iconUrl, onClick, href }) => (
        <div
          key={href}
          data-isactive={location.pathname === href ? "true" : "false"}
          className={Styles.iconContainer}
        >
          <IconButton
            text={false}
            color="var(--light-bg)"
            onClick={onClick}
            className={Styles.icon}
            size="large"
            style={{ width: 60, height: 60, "--btn-height": 60 }}
          >
            <SvgLoader path={iconUrl} style={{ width: 32, heigth: 32 }}>
              <SvgProxy />
            </SvgLoader>
          </IconButton>
        </div>
      ))}
    </footer>
  );
}

Footer.propTypes = {
  ToolBarDatas: PropTypes.arrayOf({
    iconUrl: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
  }),
};
