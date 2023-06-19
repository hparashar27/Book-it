import React from 'react'
import { useState } from 'react'
import {toast} from "react-toastify"
import {useSession,signIn} from "next-auth/react"
import styles from "./login.module.css"
import {FcGoogle}  from "react-icons/fc"
import {BsGithub} from "react-icons/bs"
import { Button } from '@material-ui/core'

const Login = () => {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const {data} = useSession();
console.log(data)


const submitHandler = async(e)=>{
e.preventDefault();
const result = await signIn("credentials",{
redirect:false,
email,
password
})

if(result.error){
  toast.error(result.error);
}else{
 window.location.href = "/"
} 
}
  return (<>
      <div className={styles.search_form_container}>
            <form className={styles.form} onSubmit={submitHandler}>
            <h3>Login to the Bookit !</h3>
            <div className={styles.form_item}>
                <label>Email</label>
                <input 
                placeholder=' Enter your email here '
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                > 
                </input>
                </div>
                <div className={styles.form_item}>
                <label>Password</label>
                <input 
                placeholder=' Enter your password '
                type='text'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                > 
                </input>
                </div>
                <div className={styles.form_item}>
                <button className={styles.submit}>Submit</button>
 <div className={styles.loginWithgoogit}>
<button onClick={()=>signIn("google")}><FcGoogle/></button>
<button><BsGithub/></button>
</div>
                </div>
            </form>
    
    </div>

    </>
  )
}

export default Login