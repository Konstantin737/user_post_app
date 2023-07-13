import React, { useState } from "react"
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './AboutDev.module.css'
import photo from './image/photo.png'
import imagegit from './image/git.jpg'
import imagecod from './image/codewars.png'
import imgPort1 from './image/works/HTMLCSS.png'
import imgPort2 from './image/works/HTMLCSS2.png'
import imgPort3 from './image/works/HTMLCSS3.png'
import imgPort4 from './image/works/HTMLCSS4.png'
import imgPort5 from './image/works/HTMLCSS5.png'
import imgPort6 from './image/works/HTMLCSS6.png'
import imgPort7 from './image/works/JS.png'
import imgPort8 from './image/works/JS1.1.png'
import imgPort9 from './image/works/JS1.2.png'
import imgPort10 from './image/works/JS2.png'
import imgPort11 from './image/works/JS3.png'
import imgPort12 from './image/works/game1.png'
import imgPort13 from './image/works/game2.png'
import imgPort14 from './image/works/React1.png'
import imgPort15 from './image/works/React2.png'
import imgPort16 from './image/works/React3.png'
import imgPort17 from './image/works/React4.png'
import imgPort18 from './image/works/Pharmacy.png'
import imgPort19 from './image/works/Pharmacy2.png'
import imgPort20 from './image/works/Pharmacy3.png'
import imgPort21 from './image/works/adaptiv.png'
import left from './image/left.png'
import right from './image/right.png'

const AboutDev = () => {

   const userInfo = useSelector(state=>state)

   const imagePortfolio = [imgPort1, imgPort2, imgPort3, imgPort4, imgPort5, imgPort6, imgPort7, imgPort8, imgPort9, imgPort10, imgPort11, imgPort12, imgPort13, imgPort14, imgPort15, imgPort16, imgPort17, imgPort18, imgPort19, imgPort20, imgPort21]
   let [count, setCount] = useState(0)

   const turnLeft = () => {
      if(count!==0) {setCount(count-1)} else {setCount(imagePortfolio.length-1)}
   }
   const turnRight = () => {
      if(count!==imagePortfolio.length-1) {setCount(count+1)} else {setCount(0)}
   }

   return (
      <>
      {['md'].map((expand) => (
         <Navbar key={expand} expand="lg" bg="dark" variant="dark" className="mb-3">
         <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Brand href="/home">"EasyApp"</Navbar.Brand>
            <Navbar.Offcanvas
               id={`offcanvasNavbar-expand-${expand}`}
               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               placement="start"
            >
               <Offcanvas.Header closeButton>
               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
               </Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
               <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/posts">All Posts</Nav.Link>
                  <Nav.Link href="/users">All User Info</Nav.Link>
                  <Nav.Link href="/developer">Developer Info</Nav.Link>
               </Nav>
               </Offcanvas.Body>
            </Navbar.Offcanvas>
         </Container>
         </Navbar>
      ))}

      {/* <Button variant={`dark ${styles.btn_return}`} size="lg" href="/home">
         Return to Main Menu
      </Button> */}
      <div className={styles.container}>
         <img className={styles.photo} src={photo} alt='devPhoto'/>
         <div className={styles.container_info}>
            <span>Имя: {userInfo.user.lastName} {userInfo.user.firstName} {userInfo.user.middleName}</span>
            <span>Email: {userInfo.user.email}</span>
            <a href={userInfo.user.site}>{userInfo.user.site}</a>
         </div>
      </div>
      <div className={styles.container}>
         <img className={styles.photo} src={imagegit} alt='devPhoto'/>
         <div className={styles.container_info}>
            <a href={userInfo.gitHub}>https://github.com</a>
         </div>
      </div>
      <div className={styles.container}>
         <img className={styles.photo} src={imagecod} alt='devPhoto'/>
         <div className={styles.container_info}>
            <a href={userInfo.codeWars}>https://www.codewars.com</a>
         </div>
      </div>
      <div className={styles.container}>
         <div className={styles.container_info}>
            <span>Повышение квалификации, курсы:</span>
            {userInfo.courses.map((course, index) => <span className={styles.course_span} key={index}>&#128214; {index+1+'.'} {course}</span>)}
         </div>
      </div>
      <div className={styles.container_carucele}>
         <img className={styles.image_arrow} alt='left_image' src={left} onClick={turnLeft}></img>
         <img className={styles.image_carucele} src={imagePortfolio[count]} alt='portfolio_image'></img>
         <img className={styles.image_arrow} alt='right_image' src={right} onClick={turnRight}></img>
      </div>
      </>
   )
}

export default AboutDev