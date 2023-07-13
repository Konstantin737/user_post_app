import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import styles from './PostListUser.module.css'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function PostListUser() {
   const {id} = useParams()
   const userInfo = useSelector(state=>state)
   const [dataUsers, setDataUsers] = useState('')
   const [dataPosts, setPosts] = useState('')
   const [pressLoadButton, setPressLoadButton] = useState(false)

   function dataPostsLoad() {
      setPosts(userInfo.data.filter(item=>item.userId===Number(id)));
      setDataUsers(...userInfo.dataUsers.filter(item=>item.id===Number(id)));
   }
   useEffect(()=>{dataPostsLoad()}, [])

   return (
      <div className={styles.wrapper}>
      {dataUsers&&<div className={styles.post_panel}>
         <div>
            <img className={styles.image_avatar} src={`${dataUsers.user_image}`} alt="avatar" />
         </div>
         <div>
         <span>{`Пользователь: ${dataUsers.name}`}</span><br/>
            <span>{`Электронная почта: ${dataUsers.email}`}</span><br/>
            <span>{`Номер телефона ${dataUsers.phone}`}</span><br/>
            <span>{`Город ${dataUsers.address.city}`}</span>
         </div>
      </div>}
      {dataPosts&&!pressLoadButton&&<div className={styles.post_panel}>
            <h5>{dataPosts[0].title}</h5>
            <span>{dataPosts[0].body}</span>
         </div>
      }
      {dataPosts&&pressLoadButton&&dataPosts.map((post, index)=>{
         return(
         <div className={styles.post_panel} key={index}>
            <h5>{post.title}</h5>
            <span>{post.body}</span>
         </div>)
      })}
      {dataUsers&&<Button variant={`dark`} className={styles.load_btn} size="lg" onClick={()=>{setPressLoadButton(pressLoadButton===true?false:true)}}>
         {pressLoadButton===false?`Load other posts ${dataUsers.name}`:`Сlose other posts ${dataUsers.name}`}
      </Button>}
      </div>
   )
}

export default PostListUser