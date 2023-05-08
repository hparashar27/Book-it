import React from 'react'
import styles from "./Home.module.css"
import {BiLeftArrowAlt} from "react-icons/bi"
import RoomCard from '../RoomCard/RoomCard'
const Home = () => {
  return (
    <>
    <span className={styles.rooms_heading}>All rooms</span>
    <span className={styles.Back_to}><BiLeftArrowAlt/>Back to Search </span>
    <div className={styles.room_cards}>
    <RoomCard/>
    </div>
    </>
  )
}

export default Home