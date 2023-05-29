import React, {useState} from "react";
import Stack, { Col, Form, Row }  from "react-bootstrap";

function StackVerticalExample(){
    const [validated, setValidated]= useState(false);
    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        if(form.checkValidity() ===false){
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    
                </Form.Group>
            </Row>
        </Form>
    );
}

// import Container from "react-bootstrap/esm/Container";
// import Stack from "react-bootstrap/Stack";
// function StackVerticalExample(){
//   return(
//     <Container>
//         <Stack gap={5} direction="horizontal">
//           <div className="bg-dark text-white border">First Item</div>
//           <div className="bg-dark text-white border">Second Item</div>
//           <div className="bg-dark text-white border">Third Item</div>
//         </Stack>
//     </Container>
//   );
// }
// export default StackVerticalExample;

// import Button from " react-bootstrap/Button";
// import { FormCheck, FormGroup, FormLabel } from "react-bootstrap";
// import Form from "react-bootstrap/Form";

// function BasicExample() {
//   return (
//       <Form className="m-auto w-75">
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" disabled/>
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password"/>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out"/>
//         </Form.Group>
//         <Button variant="success" type="submit">
//           Submit
//         </Button>
//       </Form>
//   );
// }

export default StackVerticalExample;