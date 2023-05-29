import { useState } from 'react'
import React  from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import{createUserWithEmailAndPassword} from "firebase/auth"; 
import { auth } from './firebase-config';
import useStorage from './hooks/storage.hook';


function Register() {
  const { setItem } = useStorage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword( auth,email,password).then((res) => {
        setItem("profile" ,res);
        navigate("/")
      });
  }

  return (
    <>
      <div>Walcome to my Regster Page</div>
      <Form noValidate onSubmit={(e) => onSubmit(e)} className='col-md-6 m-5'>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationFormik03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationFormikUsername">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                aria-describedby="inputGroupPrepend"
                value={password}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />{' '}
              <br />
            </InputGroup>
          </Form.Group>
        </Row>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Button variant="secondary">
            Close
          </Button>
          <Button type="submit">Submit API</Button>
        </div>
      </Form>
    </>
  )
}

export default Register
