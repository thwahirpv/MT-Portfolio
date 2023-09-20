import React from "react"
import Image from "next/image"
import styles from "./page.module.css"
import Hero from "public/hero.png"
import Button from "@/components/Button/button"
  

export default function Home() {
    return (
        <div className={styles.container}>

            <div className={styles.item}>
                <h1 className={styles.title}>
                    Better design <br/>for your digital products.
                </h1>
                <p className={styles.desc}>
                    Turning your Idea  into Reality. We bring together
                    the teams from the globel tech industry.
                    
                </p>
               <Button url="/" text="See Our Works"/>
            </div> 

            <div className={styles.item}>  
                <Image src={Hero} alt="" className={styles.img}/>
            </div> 
        </div>
    )
}

