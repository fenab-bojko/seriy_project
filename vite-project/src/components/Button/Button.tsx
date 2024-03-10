import React, { FC } from "react";
import "./Button.scss";

interface IButton {
  children: string;
  color?: string;
}

export const Button: FC<IButton> = (props) => {
  const { children, color } = props;

  return <button className={color}>{children}</button>;
};
