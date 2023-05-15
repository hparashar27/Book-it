import Layout from '@/components/Layout/Layout'
import RoomCardDetail from '@/components/RoomCardDetails/RoomCardDetail'
import { getRoomDetail } from '@/redux/actions/roomActions'
import { wrapper } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function roomDetail(){
  const data = useSelector(state => state.roomDetails)
  console.log(data);
  return (
    <Layout>
        <RoomCardDetail />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async({req,params}) => {
  await store.dispatch(getRoomDetail(req,params.id));
})