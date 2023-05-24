import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  PostsList  from './Components/PostList/PostsList';
import './App.css';
import AboutDev from './Components/AboutDev/AboutDev';
import UserPostInfo from './Components/UserPostInfo/UserPostInfo';
import NavBar from './Components/NavBar/NavBar';
import PostListUser from './Components/PostListUser/PostListUser';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NavBar/>}/>
        <Route path='posts' element={<PostsList/>}/>
        <Route path='posts/:id' element={<PostListUser/>}/>
        <Route path="developer" element={<AboutDev/>}/>
        <Route path="users" element={<UserPostInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
