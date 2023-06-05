import React from 'react'
import { useState } from 'react'
import {signIn} from "next-auth"
import styles from "./login.module.css"

const Login = () => {
  const result = signIn({
    email,
    password
  })
  cons
  return (
      <div className={styles.search_form_container}>
            <form className={styles.form} onSubmit={submitHandler}>
            <h3>Search your room !</h3>
            <div className={styles.form_item}>
                <label>Location</label>
                <input 
                placeholder=' Enter location search for'
                type='text'
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                ></input>
                </div>
                <div className={styles.form_item}>
                <label>Guests</label>
                <select>
                {[1,2,3,4,5,6].map((num)=>{
                    return(
                        <option 
                        key={num}
                        value={num}
                        onChange={(e)=>setGuests(e.target.value)}
                         >
                            {num}
                        </option>
                    )
                })}
                </select>
                </div>
                <div className={styles.form_item}>
                <label>Room type</label>
                <select>
                {["King","Twin","Single",].map((roomType)=>{
                    return(
                        <option key={roomType} value={roomType}  onChange={(e)=>setRoomtype(e.target.value)}>
                            {roomType}
                        </option>
                    )
                })}
                </select>
                </div>
                <div className={styles.form_item}>
                <button>Submit</button>
                </div>
            </form>
    </div>
  )
}

export default Login