import React from 'react'
import styles from "./RoomCardDetail.module.css";
import Image from 'next/image';
import {FaBed,FaBath} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import {TbToolsKitchen2} from "react-icons/tb"
import {Card } from '@material-ui/core';

const RoomCardDetail = ({roomData}) => {
  return (
    <>
    {roomData && <div className={styles.room_detail_page}>
     <span className={styles.room_heading}>{roomData.name}</span>
     <p>{roomData.address}</p>
     <div className={styles.rev_rat}>
        <div className={styles.room_rating}> ⭐⭐⭐⭐⭐</div>
        <p>{roomData.numOfReviews} reviews</p>
     </div>
     <Image alt='hotel-room' src={roomData.images[0].url} width={100} height={100} className={styles.room_img}></Image>
     <section className={styles.disc_box}>
        <div className={styles.description}><h4>Description</h4> <br/>{roomData.description}</div>
        <Card className={styles.pay_card}>
            <h5> {roomData.pricePerNight}/night </h5>
            <button className={styles.pay_button}>pay now</button>
        </Card>
     </section>
     <section className={styles.features}>
    <h4>Features </h4>
    <div className={styles.feature_item_box}>
       <p><FaBed color='#e61e4d'/>{roomData.numOfBeds} Bed</p>
       <p><FaBath color='#e61e4d'/>{roomData.numOfBath} baths</p>
       <p><BsPeopleFill color='#e61e4d'/>{roomData.guestCapacity} guest</p>
       <p><TbToolsKitchen2 color='#e61e4d'/> {roomData.numOfKitchen}Kitchen</p>
     </div>
    </section>
    <section className={styles.rating}>
      <h4>Ratings</h4>
      <Card className={styles.rating_card}>
       <div>{roomData.reviews.map((rating,index)=>{return <div key={index}>⭐</div>})}</div>
       <p>By Harsh</p>
       <h6>This is a superb app ! </h6>
      </Card>
      <Card className={styles.rating_card}>
       <div>⭐⭐⭐⭐⭐</div>
       <p>By Harsh</p>
       <h6>This is a superb app ! </h6>
      </Card>
    </section>
    </div>}
    </>
  )
}

export default RoomCardDetail