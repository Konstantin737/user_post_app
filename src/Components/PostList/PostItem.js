import React, { useState } from 'react';
import styles from './PostList.module.css'

const PostItem = ({post, id, likeIsTrue, dataUsers}) => {

   const [like, setLike] = useState('👍🏻')


   const putTheLike = () => {
      like==='👍🏻'?setLike('👍'):setLike('👍🏻')
      likeIsTrue(id)
   }
   const name = dataUsers[post.userId-1].name;

   return (
      <div className={styles.post_panel}>
         <div className={styles.inner_panel}>
            <div className={styles.img_panel}>
               <img className={styles.image_avatar} src={`${post.user_image}`} alt="avatar"/>
               <a className={styles.link} href={`posts/${post.userId}`}>.</a>
            </div>
            <div>
               <h6>{`Пост сделан пользователем: ${name}`}</h6><br/>
               <h6>{`${post.title}`}</h6>
               <span>{`${post.body}`}</span>
            </div>
         </div>
         <div className={styles.like_panel}>
            <button className={styles.like_btn} onClick={putTheLike}>
               {like}
            </button>
         </div>
      </div>
   )
}

export default PostItem;