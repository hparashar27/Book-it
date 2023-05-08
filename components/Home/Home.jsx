import React from 'react'
import styles from "./Home.module.css"
import {BiLeftArrowAlt} from "react-icons/bi"
import RoomCard from '../RoomCard/RoomCard'
const Home = () => {
  return (
    <>
    <div className={styles.head}>
    <span className={styles.rooms_heading}>All rooms</span>
    <span className={styles.back_to}><BiLeftArrowAlt/>Back to Search </span>
    </div>
    <RoomCard/>
    </>
  )
}

export default Home