// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Layout from "@/components/Layout/Layout";
import Home from "@/components/Home/Home"
import { wrapper } from "@/redux/store";
import { getRooms } from "@/redux/actions/roomActions";


// const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
    <Layout>
      <Home/>
    </Layout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async({req,query}) => {
   await store.dispatch(getRooms(req,query.page,query.location,query.guests,query.roomType));
})

