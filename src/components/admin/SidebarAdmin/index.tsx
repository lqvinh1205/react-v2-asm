import React from "react";
import styles from "./SidebarAdmin.module.css";
import dienthoai from "../../../assets/dienthoai.svg"
import mtb from "../../../assets/mtb.svg"
import laptop from "../../../assets/laptop.svg"
import headphone from "../../../assets/dienthoai.svg"
type Props = {}

const SidebarAdmin = (props: Props) => {
  return (
    <div className={styles.sidebar_ad}>
      <ul>
        <li><img src={dienthoai} alt="" />Điện thoại</li>
        <li><img src={mtb} alt="" />Máy tính bảng</li>
        <li><img src={laptop} alt="" />Lap top</li>
        <li><img src={headphone} alt="" />Âm thanh</li>
      </ul>
    </div>
  )
}

export default SidebarAdmin