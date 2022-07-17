import HeaderAdmin from "../../components/admin/HeaderAdmin";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import React from "react";
import styles from "./AdminLayout.module.css";
import { Outlet } from "react-router-dom";
type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.container}>
          <HeaderAdmin />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <SidebarAdmin />
          </div>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
