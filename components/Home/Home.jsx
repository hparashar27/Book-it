import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import {BiLeftArrowAlt} from "react-icons/bi"
import RoomCard from '../RoomCard/RoomCard'
import { useSelector ,useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors } from '@/redux/actions/roomActions'

const Home = () => {
  const dispatch = useDispatch();
  const {rooms,error} = useSelector(state => state.allrooms);
  useEffect(()=>{
    toast.error(error);
    dispatch(clearErrors());
  },[])
    
  return (
    <>
    <div className={styles.head}>
    <span className={styles.rooms_heading}>All rooms</span>
    <span className={styles.back_to}><BiLeftArrowAlt/>Back to Search </span>
    </div>
    <div className={styles.card_container}>
    {rooms && rooms.length === 0 ? <div> no rooms </div> : rooms.map((room) => {
        return <RoomCard room={room} key={room._id}/>
    }
    )}
    </div>
  </>
  )
}

export default Home