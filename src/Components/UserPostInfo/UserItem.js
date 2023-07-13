import React from 'react';
import styles from './UserPostInfo.module.css'

const UserItem = ({user, index}) => {

   return (
      <div className={styles.post_panel}>
         <div>
            <img className={styles.image_avatar} src={`${user.user_image}`} alt="avatar" />
         </div>
         <div>
         <span>{`Пользователь: ${user.name}`}</span><br/>
            <span>{`Электронная почта: ${user.email}`}</span><br/>
            <span>{`Номер телефона: ${user.phone}`}</span><br/>
            <span>{`Город: ${user.address.city}`}</span>
         </div>
      </div>
   )
}

export default UserItem;