import React from 'react'
import styles from "./Header.module.css"
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.Header_container}>
            <Image
            className={styles.logo}
            src="/images/bookit_logo.png" alt='bookit_logo' height={55} width={120}
            />
        <div className={styles.spacer}></div>
          <button className={styles.button_class}>Login</button>
           
    </div>
  )
}

export default Header