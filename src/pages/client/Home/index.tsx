import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./Home.module.css"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
    <Header />
    <div className={styles.container}>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.banner}></div>
    </div>
    <div className={styles.main}>
      <Outlet />
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
  )
}

export default Home