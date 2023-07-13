import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import DataAPI from '../../ServerData/DataAPI';
import image from './image/i.jpg'
import styles from './PostListUser.module.css'
import Button from 'react-bootstrap/Button';

function PostListUser() {
   const {id} = useParams()
   const [dataUsers, setDataUsers] = useState('')
   const [dataPosts, setPosts] = useState('')
   const [pressLoadButton, setPressLoadButton] = useState(false)

   async function fetchPosts() {
      const postList = await DataAPI.getPosts()
      setPosts(postList);
      const usersList = await DataAPI.getUsers()
      usersList.forEach((user)=>{
         user.user_image = `${image}`
      })
      setDataUsers(usersList);
   }
   useEffect(()=>{fetchPosts()}, [])

   let newArr = []
   if(dataPosts) {
      dataPosts.forEach((post)=>{
         if(post.userId===Number(id)) {
            return newArr.push(post)
         }
      })
   }

   return (
      <div className={styles.wrapper}>
      {dataUsers&&<div className={styles.post_panel}>
         <div>
            <img className={styles.image_avatar} src={`${dataUsers[id-1].user_image}`} alt="avatar" />
         </div>
         <div>
         <span>{`Пользователь: ${dataUsers[id-1].name}`}</span><br/>
            <span>{`Электронная почта: ${dataUsers[id-1].email}`}</span><br/>
            <span>{`Номер телефона ${dataUsers[id-1].phone}`}</span><br/>
            <span>{`Город ${dataUsers[id-1].address.city}`}</span>
         </div>
      </div>}
      {dataPosts&&!pressLoadButton&&<div className={styles.post_panel}>
            <h5>{newArr[0].title}</h5>
            <span>{newArr[0].body}</span>
         </div>
      }
      {dataPosts&&pressLoadButton&&newArr.map((post, index)=>{
         return(
         <div className={styles.post_panel} key={index}>
            <h5>{post.title}</h5>
            <span>{post.body}</span>
         </div>)
      })}
      {dataUsers&&<Button variant={`dark`} className={styles.load_btn} size="lg" onClick={()=>{setPressLoadButton(pressLoadButton===true?false:true)}}>
         {pressLoadButton===false?`Load other posts ${dataUsers[id-1].name}`:`Сlose other posts ${dataUsers[id-1].name}`}
      </Button>}
      </div>
   )
}

export default PostListUser