import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import AboutImage from 'public/aboutImage.jpg'
import Button from '@/components/Button/button'


const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image 
        src={AboutImage}
        alt=''
        className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Digital Storytellers
          </h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>

          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dicta, unde fuga ullam commodi suscipit sint non 
              eligendi magni, eius neque ducimus accusamus,
               fugit repellat laborum accusantium reprehenderit
               <br/>
               <br/>
                voluptas qui in! Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Eligendi consequuntur, 
                 laudantium atque id voluptatum nihil quas 
                 autem hic nobis cupiditate. Saepe officia 
                 iste amet beatae eius a provident id voluptatum?
            </p>
          </div>

          <div className={styles.item}>
              <h1 className={styles.title}>
                What We Do?
              </h1>
              <p className={styles.desc}> 
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sunt, doloribus vitae, 
                corrupti possimus quidem cum a eligendi 
                accusamus ducimus nihil voluptas! Deserunt 
                fuga perspiciatis dignissimos at, veritatis 
                quisquam! Obcaecati, nostrum.
                <br/>
                <br/>
                - Creative Illustration
                <br/>
                <br/>
                - Dynamic Website
                <br/>
                <br/>
                - Fast and Happy Mobile
              </p>
              <Button url="/contact" text="Contact"/>
          </div>
      </div>
    </div>
  )
}

export default About
