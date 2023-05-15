
import React from 'react'
import styles from "./RoomCard.module.css"
import { Button } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'


const RoomCard = ({room}) => {
  return (
        <div className={styles.card}>
        <div className={styles.room_image}>
    <Image className={styles.image} src={room.images[0].url} alt='room-pic' width={300} height={250}/>
        </div>
        <p><Link href={`room/${room._id}`}>{room.name}</Link></p>
        <h5>{room.ratings}</h5>
        <div className={styles.rating}>
            <div></div>
            <span>⭐⭐⭐⭐⭐{room.reviews}</span>
        </div>
        <Button>View Details</Button>
        </div>
  )
}

export default RoomCard