import React from "react"
import "./Product.css"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router"

function Product({ item }) {
  const navigate = useNavigate();
  return (
    <Card style={{}} className="card1" onClick={() => navigate(`/${item.id}`)}>
      <Card.Img
        variant="top"
        src={item?.images[0].imgsrc}
      />
      <Card.Body>
        <Card.Title>
          {" "}
          <h3>{item?.name} </h3>
        </Card.Title>
        <Card.Text className="text1">
          {item?.desc}


          {/* Sole: Leather <br />
        Closure: lace-up
        <br />
        Department Name: Mens
        <br />
        Pattern Type: Solid
        <br /> */}
        </Card.Text>
        <b>
          <h4>Price:{item?.price}</h4>
        </b>
      </Card.Body>
    </Card>

  )
}

export default Product;