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
       <Navbar bg="light" expand="lg" className="w-100" sticky="top" style={{background:"transparent"}}>
  <Container className="d-flex justify-content-around w-100">
      <div className="w-100 d-flex justify-content-between">
    <Navbar.Brand href="#">
      {/* <img src='assets/img/logo/Foodii.png' width={50} height={55}  alt='Foodii logo'/> */}
      <h1 style={{color:"#F39C12"}} className="fw-bolder">Foodii</h1>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav "  style={{border:"none"}}/>
</div>
        <div >
    <Navbar.Collapse id="basic-navbar-nav"style={{border:"none"}}>

            <Nav className="me-auto">
        <Nav.Link href="#Home" ><span className={NavBarCom.menuitem}>Home</span></Nav.Link>
        <Nav.Link href="#"><span className={NavBarCom.menuitem}>Menu</span></Nav.Link>
        <Nav.Link href="#"><span className={NavBarCom.menuitem}>Order</span></Nav.Link>
        <Nav.Link href="#about"><span className={NavBarCom.menuitem}>Why Us</span></Nav.Link>

        <Nav.Link href="#"><span className={NavBarCom.menuitem} style={{color:"#c0392b"}}>077589624 Order Now</span></Nav.Link>
        {/* <Nav.Link href="#"> <span className="text-danger">Donate</span> </Nav.Link> */}
        </Nav>
      
    </Navbar.Collapse>
        </div>
  </Container>
</Navbar>
</>
    )
}

export default NavBar
