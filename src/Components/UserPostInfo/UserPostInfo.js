import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './UserPostInfo.module.css'
import DataAPI from '../../ServerData/DataAPI';
import Spinner from 'react-bootstrap/Spinner';
import UserItem from './UserItem';
import image from './image/i.jpg'

const UserPostInfo = () => {
   const [dataUsers, setDataUsers] = useState('')
   const [visibleSpinner, setVisibleSpinner] = useState(false)
   


   async function fetchPosts() {
      setVisibleSpinner(true)
      const usersList = await DataAPI.getUsers()
      usersList.forEach((user)=>{
         user.user_image = `${image}`
      })
      setDataUsers(usersList);
      setVisibleSpinner(false)
   }

   return (
      <div className={'d-grid gap-2'}>
         <Button variant={`dark ${styles.btn_load}`} size="lg" onClick={fetchPosts}>
            Get all users info
         </Button>
         {visibleSpinner?<Spinner className={styles.spinner} animation="border"/>:''}
         {dataUsers?dataUsers.map((user, index)=>{return <UserItem key ={user.id} user={user}/>}):''}
      </div>
   )
}

export default UserPostInfo