import image from '../Components/PostList/image/i.jpg'

export default class DataAPI {
   static async getPosts() {
      try {
         const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
            method: 'GET'
         })
         if(!response.ok) {
            throw new Error('Ошибка получения постов с сервера: Нужен хлеб, сходи купи')
         }
         const postsJSON = await response.json()
         postsJSON.forEach((post)=>{
            post.user_image = `${image}`
            post.like = false;
         })
         return postsJSON;
      } catch(error) {
         console.error(error)
      }
   }
   static async getUsers() {
      try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users' , {
            method: 'GET'
         })
         if(!response.ok) {
            throw new Error('Ошибка получения юзеров с сервера: Нужены яйца, сходи купи')
         }
         const usersJSON = await response.json()
         usersJSON.forEach((user)=>{
            user.user_image = `${image}`
         })
         return usersJSON;
      } catch(error) {
         console.error(error)
      }
   }
}

export const postList = await DataAPI.getPosts()
export const usersList = await DataAPI.getUsers()
