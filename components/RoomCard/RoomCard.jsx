import React from 'react'
import { useSelector } from "react-redux";
import styles from "./RoomCard.module.css"
import { Button } from '@material-ui/core'
import Image from 'next/image'

const RoomCard = () => {
    const Allrooms = useSelector((state) => state.allRooms);
    console.log(Allrooms)

  return (
    <div className={styles.card_container}>
    {Allrooms && Allrooms.map((room)=>(
    <div className={styles.card}>
    <div className={styles.room_image}>
<Image className={styles.image} src="/images/hotel-room.jpg" alt='room-pic' width={300} height={250}/>
    </div>
    <p>{room.name}</p>
    <h5>{room.pricePerNight} </h5>
    <div className={styles.rating}>
        <div>{room.ratings} </div>
        <span>{room.numOfReviews}</span>
    </div>
    <Button>View Details</Button>
    </div>))}
    </div>
  )
}

export default RoomCard