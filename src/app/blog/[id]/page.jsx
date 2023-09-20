import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{ cache: 'no-store' })
  
  if (!res.ok) {
    return new PageNotFoundError()
  }
 
  return res.json()
}

const BlogPost = async ({params}) => {

  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
           {data.title}
          </h1>
          <p className={styles.desc}>
           {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Thwahir pv</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.body}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;