import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    }  
  ]

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>MT</Link>
      <div className={styles.links}>
       <DarkModeToggle/>
        {
          links.map((link => (
            <Link key={link.id} href={link.url} className={styles.linkoe}>
              {link.title}
            </Link>
          )))
        }
        <button className={styles.button}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
