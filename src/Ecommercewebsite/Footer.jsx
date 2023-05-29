import React from 'react'
import { Col, Container, Navbar, Row } from "react-bootstrap";


function Footer() {
  return (
    <Navbar style={{ backgroundColor: "skyblue", position: "relative"}}>
        <Container>
            <Row className='m-auto'>
                <Col>
                <ul style={{listStyleType: "none" ,}}>
                    <li style={{ whiteSpace: "nowrap", fontSize: "25px"}}>
                        <b>Get To Know Us</b>
                    </li>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </Col>
                <Col>
                <ul style={{ listStyleType: "none"}}>
                    <li style={{ whiteSpace: "nowrap", fontSize: "25px"}}>
                        <b>Connect With Us</b>
                    </li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
                </Col>
                <Col>
                <ul style={{ listStyleType: "none"}}>
                <li style={{ whiteSpace: "nowrap", fontSize: "25px"}}>
                    <b>Make Money With Us</b>
                </li>
                    
                    <li>Sell on Amazon</li>
                    <li>Sell Under Amazon Accelerator</li>
                    <li>Protect And Build Your Brand</li>
                    <li>Amazon Globle Selling</li>
                    <li>Become An Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Product</li>
                    <li>Amazon Pay On Merchant</li>
                </ul>
                </Col>
                <Col>
                <ul style={{ listStyleType: "none"}}>
                <li style={{ whiteSpace: "nowrap", fontSize: "25px"}}>
                <b>Let Us Help You</b>
                </li>
                <li>COVID-19 and Amazon</li>
                <li>Your Account</li>
                <li>Return Center</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>Help</li>
                </ul>
                </Col>
            </Row>
        </Container>
    </Navbar>
  );
}

export default Footer;