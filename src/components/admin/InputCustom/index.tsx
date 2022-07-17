import React from "react";
import styles from "./InputCustom.module.css";
interface Props {
  lable: string;
  type?: any;
  width?: string;
}

const InputCustom = (props: Props) => {
  console.log(props);

  return (
    <>
      <label className={styles.input}>
        {props.lable || "Input Filed"}
        <input
          type={props.type || "text"}
          style={{ width: props.width || "100%" }}
        />
      </label>
    </>
  );
};

export default InputCustom;
