import React from "react";
import style from "./style.module.css";

type TextType = { text: string; color: string; isBold?: boolean };

const Text = ({ text, color, isBold }: TextType) => {
  return (
    <h1
      className={`${style.text} ${isBold && style.bold}`}
      style={{ backgroundColor: color }}
    >
      {text}
    </h1>
  );
};

const Keybord = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.textWrapper}>
          <Text text="Work" color="green" />
          <Text text="Hard" color="blue" isBold />
          <Text text="Dream" color="yellow" />
          <Text text="Big" color="pink" isBold />
          <Text text="Big" color="red" isBold />
          <Text text="Big" color="pink" isBold />
          <Text text="Big" color="pink" isBold />
        </div>
      </div>
    </>
  );
};

export default Keybord;
