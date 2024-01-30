
import React from 'react'
import Links from './Links/Links'

import styles from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Logo</Link>
        <div>
          <div className={styles.linkss}>
          <Links></Links>
          </div>

      </div>
    </div>
  )
}

export default Navbar