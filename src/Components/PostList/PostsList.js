import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './PostList.module.css'
import Spinner from 'react-bootstrap/Spinner';
import PostItem from './PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { getLike } from '../Store/store';

const PostsList = () => {

   const [dataPosts, setPosts] = useState('')
   const [dataUsers, setDataUsers] = useState('')
   const [visibleSpinner, setVisibleSpinner] = useState(false)

   const userInfo = useSelector(state=>state)
   const dispatch = useDispatch()

   function loadPosts() {
      setVisibleSpinner(true)
      setTimeout(()=>{
         setVisibleSpinner(false)
         setPosts(userInfo.data)
         setDataUsers(userInfo.dataUsers)
      }, 500)
   }

   const likeIsTrue = (id) => {
      dispatch(getLike(id))
   }

   return (
      <div className={'d-grid gap-2'}>
         {!dataPosts&&<Button variant={`dark ${styles.btn_load}`} size="lg" onClick={loadPosts}>
            Get all users posts
         </Button>}
         {dataPosts&&<Button variant={`dark ${styles.btn_load}`} size="lg" href="/home">
            Return to Main Menu
         </Button>}
         {visibleSpinner?<Spinner className={styles.spinner} animation="border"/>:''}
         {dataPosts&&dataUsers?dataPosts.map((post, index)=>{
               return <PostItem key = {post.id} post={post} id={post.id} index={index} likeIsTrue={likeIsTrue} dataUsers={dataUsers}/>
            }):''
         }
      </div>
   )
}

export default PostsList
