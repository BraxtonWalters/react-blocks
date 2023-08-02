import React from 'react'
import styles from "./Main.module.css"
import Subcontent from '../Subcontent/Subcontent'
import Advertisement from '../Advertisement/Advertisement'

const Main = () => {
  return (
    <div className={styles.redBox}>Main
      <div className={styles.subcontentCon}>
        <Subcontent/>
        <Subcontent/>
        <Subcontent/>
      </div>
    <Advertisement/>
    </div>
  )
}

export default Main