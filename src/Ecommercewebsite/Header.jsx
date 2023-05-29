import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";

function Header(){
    return(
        <div>
            <Navbar style={{backgroundColor:"skyblue"}}>
                <Container>
                    <Navbar.Brand href='#' style={{fontWeight:"bold",fontSize:"25px"}}> E-Commerce Site</Navbar.Brand>
                    <Nav className='me-auto' style={{marginLeft:"40px", fontSize:"18px"}}>
                        <Nav.Link style={{fontWeight:"bold", marginLeft:"40%"}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{fontWeight:"bold",marginLeft:"15px"}} href="#features">Product</Nav.Link>
                        <Nav.Link style={{fontWeight:"bold",marginLeft:"15px"}} href="#pricing">About</Nav.Link>
                        <Nav.Link style={{fontWeight:"bold",marginLeft:"15px"}} href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <i className='fas fa-cart-plus' style={{fontSize:"25px"}}></i>
                    <i className='' style={{fontSize:"20px", marginTop:"-32px", backgroundColor:"black", color: "white", padding:"0px 8px", borderRadius:"20px"}}></i>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;