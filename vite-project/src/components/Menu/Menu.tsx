import React, { FC } from "react";
import "./Menu.scss";
import { Logo } from "../Logo/Logo";

export const Menu: FC = () => {
  return (
    <div className="menu">
      <Logo />
    </div>
  );
};
