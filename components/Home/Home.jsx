import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import {BiLeftArrowAlt} from "react-icons/bi"
import RoomCard from '../RoomCard/RoomCard'
import { useSelector ,useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors } from '@/redux/actions/roomActions'
import {useRouter} from 'next/router'
import Pagination from "react-js-pagination";

const Home = () => {
  const dispatch = useDispatch();
  const {rooms,error,resPerPage,roomsCount, filteredRoomsCount} = useSelector(state => state.allrooms);
  console.log(rooms)
  console.log(resPerPage);
  console.log(roomsCount);
  console.log(filteredRoomsCount)
  useEffect(()=>{
    toast.error(error);
    dispatch(clearErrors());
  },[])

  const router = useRouter();
  let {page = 1} = router.query
  page = Number(page);
  
  const handlePagination =(pageNumber)=>{
window.location.href = `?page=${pageNumber}`
  }

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
    {resPerPage<roomsCount && <div className={styles.pagination}>
      <Pagination
     activePage={page}
     itemsCountPerPage={resPerPage}
     totalItemsCount={roomsCount}
     onChange={handlePagination}
     nextPageText={"Next"}
     firstPageText={"First"}
     lastPageText={"Last"}
     prevPageText={"Prev"}
     itemClass={styles.pagination_item}
     linkClass={styles.pagination_link}
    />
      </div>}
  </>
  )
}

export default Home