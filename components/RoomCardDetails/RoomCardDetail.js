import React from 'react'
import styles from "./RoomCardDetail.module.css";
import Image from 'next/image';
import {FaBed,FaBath} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import {TbToolsKitchen2} from "react-icons/tb"
import {RxCross2} from "react-icons/rx"
import {TiTick} from "react-icons/ti"
import {Card } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 
import Head from 'next/head';

const RoomCardDetail = ({roomData}) => {
  return (
    roomData &&
    <>
    <Head>
    <title>{roomData.name}-bookit</title>      
    </Head>

    {<div className={styles.room_detail_page}>
     <span className={styles.room_heading}>{roomData.name}</span>
     <p>{roomData.address}</p>
     <div className={styles.rev_rat}>
        <div className={styles.room_rating}> ⭐⭐⭐⭐⭐</div>
        <p>{roomData.numOfReviews} reviews</p>
     </div>
    
   <Carousel className={styles.room_carousel} axis="horizontal" autoPlay={true} autoFocus={true} dynamicHeight={true}>
  { roomData.images && roomData.images.map((image, index) => (
    <Image
      key={index}
      alt="hotel-room"
      src={image.url}
      width={100}
      height={100}
      className={styles.room_img}
    />
  ))}
</Carousel>
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
     <div className={styles.feature_item_box}>
      <p>{roomData.airConditioned?<TiTick color='green'/>:<RxCross2 color='red'/>}AC room</p>
      <p>{roomData.breakfast?<TiTick color='green'/>:<RxCross2 color='red'/>}breakfast</p>
      <p>{roomData.internet?<TiTick color='green'/>:<RxCross2 color='red'/>}internet</p>
     </div>
     <div className={styles.feature_item_box}>
     <p>{roomData.petsAllowed?<TiTick color='green'/>:<RxCross2 color='red'/>}pets</p>
     <p>{roomData.roomCleaning?<TiTick color='green' />:<RxCross2 color='red'/>}cleaning</p>
     </div>
    </section>
    <section className={styles.rating}>
      <h4>Ratings</h4>
      <Card className={styles.rating_card}>
       <div>⭐</div>
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