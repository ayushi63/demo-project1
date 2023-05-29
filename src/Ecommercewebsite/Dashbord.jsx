  import React from 'react'
  import "./Dashbord.css"
  import { Button, Card, Container, ListGroup } from "react-bootstrap"
  import Product from "./Product"
  import { productData } from "./data"

  function Dashbord() {
    return (
        <div>
          <Container className='container1'>
            {productData.map((ele, idx) => (
              <Product item={ele} />
            ))}
          </Container>
        </div>
    )
  }

  export default Dashbord;