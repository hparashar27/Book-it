import React from 'react'
import styles from "./RoomCardDetail.module.css";
import Image from 'next/image';
import {FaBed,FaBath} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import {TbToolsKitchen2} from "react-icons/tb"
import {Card } from '@material-ui/core';

const RoomCardDetail = () => {
  
  return (
    <>
    <div className={styles.room_detail_page}>
     <span className={styles.room_heading}>Spacious Suite in a quiet Boston neighborhood</span>
     <p> "224 Cherry St, Buffalo, NY, 14202"</p>
     <div className={styles.rev_rat}>
        <div className={styles.room_rating}> ⭐⭐⭐⭐⭐</div>
        <p> (10 reviews)</p>
     </div>
     <Image src="/images/hotel-room.jpg" width={100} height={100} className={styles.room_img}></Image>
     <section className={styles.disc_box}>
        <div className={styles.description}><h4>Description</h4> <br/> Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.</div>
        <Card className={styles.pay_card}>
            <h5> $20/night </h5>
            <button className={styles.pay_button}>pay now</button>
        </Card>
     </section>
     <section className={styles.features}>
    <h4>Features </h4>
    <div className={styles.feature_item_box}>
       <p><FaBed color='#e61e4d'/>Beds</p>
       <p><FaBath color='#e61e4d'/>Bath</p>
       <p><BsPeopleFill color='#e61e4d'/>Guests</p>
       <p><TbToolsKitchen2 color='#e61e4d'/> Kitchen</p>
     </div>
    </section>
    <section className={styles.rating}>
      <h4>Ratings</h4>
      <Card className={styles.rating_card}>
       <div>⭐⭐⭐⭐⭐</div>
       <p>By Harsh</p>
       <h6>This is a superb app ! </h6>
      </Card>
      <Card className={styles.rating_card}>
       <div>⭐⭐⭐⭐⭐</div>
       <p>By Harsh</p>
       <h6>This is a superb app ! </h6>
      </Card>
    </section>
    </div>

    </>
  )
}

export default RoomCardDetail