import { PropsWithChildren } from "react";
import css from "./Button.module.css";

interface ButtonProps {
  onClick(): void;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => (
  <button className={css.btn} onClick={props.onClick}>
    {props.children}
  </button>
);
