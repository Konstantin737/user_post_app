import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ava from '../PostList/image/i.jpg'
import { useSelector } from 'react-redux';
import styles from './NavBar.module.css'

const NavBar = () => {

  const userInfo = useSelector(state=>state)

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
                <div className={styles.ava_condeiner}>
                  <img className={styles.ava} src={ava} alt="avatar"/>
                  <Nav.Link href="posts/1">Leanne Graham</Nav.Link>
                </div>
                <Nav.Link href="/posts">All Posts</Nav.Link>
                <Nav.Link href="/users">All User Info</Nav.Link>
                <Nav.Link href="/developer">Developer Info</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    {userInfo.challenge}
  </>
  )
}

export default NavBar
