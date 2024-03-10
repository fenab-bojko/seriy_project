import React, { FC } from "react";
import "./Header.scss";
// import { lesson } from "../../assets/lessonImg.svg";

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__name">
        <img src="" alt="" />
        <span>ОБУЧЕНИЕ</span>
      </div>
      <span>Добро пожаловать в обучающий курс CML-Bench!</span>
    </div>
  );
};
