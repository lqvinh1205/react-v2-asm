import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import location from "../../assets/frame.png";
import logo from "../../assets/logo.png";
import truck from "../../assets/truck.png";
import cart from "../../assets/cart.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.search}>
          <Input placeholder="input search text" prefix={<SearchOutlined />} className={styles.input_search} />
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <div>Goi mua hang</div>
              <div>180017878</div>
            </li>
            <li className={styles.menu_item}>
              <div className={styles.icon}>
                <img src={location} alt="" />
              </div>
              <div>
                <Link className={styles.link} to="#">
                  Cửa hàng gần bạn
                </Link>
              </div>
            </li>
            <li className={styles.menu_item}>
              <div className={styles.icon}>
                <img src={truck} alt="" />
              </div>
              <div>
                <Link className={styles.link} to="#">
                  Tra cứu đơn hàng
                </Link>
              </div>
            </li>
            <li className={styles.menu_item}>
              <div className={styles.icon}>
                <img src={cart} alt="" />
              </div>
              <div>
                <Link className={styles.link} to="#">
                  Giỏ hàng
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
