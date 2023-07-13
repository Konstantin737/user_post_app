import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './UserPostInfo.module.css'
import Spinner from 'react-bootstrap/Spinner';
import UserItem from './UserItem';
import { useSelector } from 'react-redux';

const UserPostInfo = () => {
   const [dataUsers, setDataUsers] = useState('')
   const [visibleSpinner, setVisibleSpinner] = useState(false)

   const userInfo = useSelector(state=>state)

   function getUsers() {
      setVisibleSpinner(true)
      setTimeout(()=>{
         setDataUsers(userInfo.dataUsers);
         setVisibleSpinner(false)
      }, 500)
   }

   return (
      <div className={'d-grid gap-2'}>
         {!dataUsers&&<Button variant={`dark ${styles.btn_load}`} size="lg" onClick={getUsers}>
            Get all users info
         </Button>}
         {dataUsers&&<Button variant={`dark ${styles.btn_load}`} size="lg" href="/home">
            Return to Main Menu
         </Button>}
         {visibleSpinner?<Spinner className={styles.spinner} animation="border"/>:''}
         {dataUsers?dataUsers.map((user)=>{return <UserItem key ={user.id} user={user}/>}):''}
      </div>
   )
}

export default UserPostInfo