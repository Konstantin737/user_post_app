import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './PostList.module.css'
import DataAPI from '../../ServerData/DataAPI';
import Spinner from 'react-bootstrap/Spinner';
import image from './image/i.jpg'
import PostItem from './PostItem';





const PostsList = () => {
   const [dataPosts, setPosts] = useState('')
   const [dataUsers, setDataUsers] = useState('')
   const [visibleSpinner, setVisibleSpinner] = useState(false)

   async function fetchPosts() {
      setVisibleSpinner(true)
      const postList = await DataAPI.getPosts()
      postList.forEach((post)=>{
         post.user_image = `${image}`
         post.like = false;
      })
      setPosts(postList);
      const usersList = await DataAPI.getUsers()
      usersList.forEach((user)=>{
         user.user_image = `${image}`
      })
      setDataUsers(usersList);
      setVisibleSpinner(false)
   }

   const likeIsTrue = (item) => {
      !dataPosts[item].like?dataPosts[item].like = true:dataPosts[item].like = false;
   }

   return (
      <div className={'d-grid gap-2'}>
         <Button variant={`dark ${styles.btn_load}`} size="lg" onClick={fetchPosts}>
            Get all users posts
         </Button>
         {visibleSpinner?<Spinner className={styles.spinner} animation="border"/>:''}
         {dataPosts&&dataUsers?dataPosts.map((post, index)=>{
               return <PostItem key ={post.id} post={post} index={index} likeIsTrue={likeIsTrue} dataUsers={dataUsers}/>
            }):''
         }
      </div>
   )
}

export default PostsList
