import React from 'react'
import styles from "./RoomCard.module.css"
import { Button } from '@material-ui/core'
import Image from 'next/image'

const RoomCard = () => {
  return (
    <div className={styles.card_container}>
    <div className={styles.card}>
    <div className={styles.room_image}>
<Image className={styles.image} src="/images/hotel-room.jpg" alt='room-pic' width={300} height={250}/>
    </div>
    <p>this is a great room !</p>
    <h5>20$ / night</h5>
    <div className={styles.rating}>
        <div>stars rating </div>
        <span>0 reviews</span>
    </div>
    <Button>View Details</Button>
    </div>
    <div className={styles.card}>
    <div className={styles.room_image}>
<Image className={styles.image} src="/images/hotel-room.jpg" alt='room-pic' width={300} height={250}/>
    </div>
    <p>this is a great  !</p>
    <h5>20$ / night</h5>
    <div className={styles.rating}>
        <div>stars rating </div>
        <span>0 reviews</span>
    </div>
    <Button>View Details</Button>
    </div>
    <div className={styles.card}>
    <div className={styles.room_image}>
<Image className={styles.image} src="/images/hotel-room.jpg" alt='room-pic' width={300} height={250}/>
    </div>
    <p>this is a great  !</p>
    <h5>20$ / night</h5>
    <div className={styles.rating}>
        <div>stars rating </div>
        <span>0 reviews</span>
    </div>
    <Button>View Details</Button>
    </div>
    <div className={styles.card}>
    <div className={styles.room_image}>
<Image className={styles.image} src="/images/hotel-room.jpg" alt='room-pic' width={300} height={250}/>
    </div>
    <p>this is a great  !</p>
    <h5>20$ / night</h5>
    <div className={styles.rating}>
        <div>stars rating </div>
        <span>0 reviews</span>
    </div>
    <Button>View Details</Button>
    </div>
    </div>
  )
}

export default RoomCard