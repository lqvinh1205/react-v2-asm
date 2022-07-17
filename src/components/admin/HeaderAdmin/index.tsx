import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import styles from "./HeaderAdmin.module.css";
import logo from "../../../assets/logo.png"
type Props = {};

const HeaderAdmin = (props: Props) => {
  return (
    <div className={styles.header_ad}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h3>Dashboard</h3>
      </div>
      <div className={styles.search}>
        <Input
          placeholder="input search text"
          prefix={<SearchOutlined />}
          className={styles.input_search}
        />
      </div>
      <div className={styles.user}>
        <h4>Xin chào, ADMIN</h4>
      </div>
    </div>
  );
};

export default HeaderAdmin;
