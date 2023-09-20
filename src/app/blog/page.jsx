import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{ cache: 'no-store' })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.Maincontainer}>
      {
        data.map((item)=>(
          <Link href="/blog/testId" className={styles.container} key={item.id}>

        <div className={styles.imageContainer}> 
        <Image
          src="https://images.pexels.com/photos/1109393/pexels-photo-1109393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=''
          width={400}
          height={250}
          className={styles.image}
        />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            {item.title}
          </h1>
          <p className={styles.desc}> 
           {item.body}
          </p>
        </div>

      </Link>

        ))
      }
    </div>
  )
}

export default Blog
