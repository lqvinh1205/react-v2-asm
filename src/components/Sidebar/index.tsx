import {
  AppstoreOutlined,
  LaptopOutlined,
  MailOutlined,
  MobileOutlined,
  PhoneOutlined,
  SettingOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";

import React from "react";
import styles from "./Sidebar.module.css";
import amthanh from "../../assets/headphone.svg";
import home from "../../assets/home.svg";
import phukien from "../../assets/phukien.svg";
import pc from "../../assets/pc.svg";
import tv from "../../assets/tv.svg";
import thucu from "../../assets/thucu.svg";
import hangcu from "../../assets/hangcu.svg";
import sale from "../../assets/sale.svg";
type Props = {};
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Điện thoại", "sub1", <MobileOutlined style={{ fontSize: 20 }} />, [
    getItem(
      "Item 1",
      null,
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      null,
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("Laptop", "sub2", <LaptopOutlined style={{ fontSize: 20 }} />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem(
    "Máy tính bảng",
    "sub3",
    <TabletOutlined style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Âm thanh",
    "sub4",
    <img src={amthanh} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Nhà thông minh",
    "sub5",
    <img src={home} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Phụ kiện",
    "sub6",
    <img src={phukien} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "PC- Màn hình",
    "sub7",
    <img src={pc} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Tivi",
    "sub8",
    <img src={tv} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Thu cũ",
    "sub9",
    <img src={thucu} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Hàng cũ",
    "sub10",
    <img src={hangcu} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Khuyến mãi",
    "sub11",
    <img src={sale} alt="" style={{ fontSize: 20 }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
];

const Sidebar = (props: Props) => {
  return (
    <div className={styles.sidebar}>
      <Menu
        style={{ width: 256 }}
        mode="vertical"
        items={items}
        className={styles.menu_item}
      />
    </div>
  );
};

export default Sidebar;
