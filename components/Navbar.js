import React, {  useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    NavDropdown,
  } from "react-bootstrap";
import NavBarCom from "../styles/NavBar.module.css";

// import Image from 'next/image'
// import Link from 'next/link'

// import { FaBars } from "react-icons/fa";
// import "./navbar.css";
// import styles from '../styles/navbar.module.css'
// import Image from 'next/image';

function NavBar() {


    return (
        <>
       <Navbar bg="light" expand="lg" className="w-100" sticky="top">
  <Container className="d-flex justify-content-around w-100">
      <div className="w-100 d-flex justify-content-between">
    <Navbar.Brand href="#"><img src='assets/img/logo/logosc.jpeg' width={50} height={55}  alt='universe'/></Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav h-50" />
</div>
        <div >
    <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
        <Nav.Link href="#Home" ><span className={NavBarCom.menuitem}>Home</span></Nav.Link>
        <Nav.Link href="#about"><span className={NavBarCom.menuitem}>About Us</span></Nav.Link>
        <Nav.Link href="#"><span className={NavBarCom.menuitem}>Blogs</span></Nav.Link>

        <Nav.Link href="#"><span className={NavBarCom.menuitem}>Team</span></Nav.Link>
        <Nav.Link href="#"><span className={NavBarCom.menuitem}>Contact Us</span></Nav.Link>
        <Nav.Link href="#"> <span className="text-danger">Donate</span> </Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      
    </Navbar.Collapse>
        </div>
  </Container>
</Navbar>
</>
    )
}

export default NavBar
