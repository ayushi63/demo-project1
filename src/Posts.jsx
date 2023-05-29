import Axios from "axios";
import { useState } from "react";
import { Mutation, useMutation, useQuery } from "react-query";
import { Modal, Button, Col, Form, Row, Table, FormLabel, InputGroup } from "react-bootstrap";

export default function Posts() {
  const [ud, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  async function fetchPosts() {
    const { data } = await Axios.get(
      "http://localhost:8080/users",
    )
    console.log(data)
    return data
  }
  // const { mutate } = useMutation(createPost);
  const { data, refetch } = useQuery('posts', fetchPosts);

  const {mutate: createMutate} =useMutation({
  mutationFn: async (body) => {
    await createUser(body)
  },
  onSuccess: () => {
    refetch()
  },
})

const {mutate: deleteMutate} =useMutation({
  mutationFn: async (id) => {
    await deleteUser(id);
  },
  onSuccess: () => {
    refetch()
  },
})
  async function createUser( body) {
    const { data, } = await Axios.post("http://localhost:8080/users",body)
    return data
  }

  async function deleteUser( id) {
    const { data, } = await Axios.delete("http://localhost:8080/users/"+ id)
    return data
  }
  
  async function updateUser( body) {
    const { data, } = await Axios.patch("http://localhost:8080/users/"+ body)
    return data
  }
  // console.log(data)
  function updateData(user) {
    setId(user.Id)
    setFirstname(user.firstname)
    setLastname(user.last.name)
    setPassword(user.Password)
    setEmail(user.email)
  }

  function onSubmit(e){
    e.preventDefault()
    createMutate({id: Date.now(), firstname, lastname, email, password})
  }
 
      {/* <div className="d-flex justify-content-end align-items-end">
        <Button className="m-3" variant="primary" onClick={() => setShow(true)}>
          Launch demo model
        </Button>
      </div> */}
      return (
        <div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <FormLabel>First Name</FormLabel>
            <Form.Control
              type="text"
              name="firstname"
              value={firstname}
              placeholder="Enter your firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>
        </Row>
        <br />
        <Form.Group as={Col} md="4" controlId="validationFormik02">
          <FormLabel>Last Name</FormLabel>

          <Form.Control
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Enter your lastname"
            onChange={(e) => setLastname(e.target.value)}
          /> {""}
          <br />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)  }
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <FormLabel>Password</FormLabel>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                name="username"
                placeholder="Enter your password"
                aria-describedby="inputGroupPrepend"
                value={password}
                onChange={(e) => setPassword (e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <br />
        </Row>
        <Button type="submit"> Submit Form</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ele, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{ele.firstname}</td>
              <td>{ele.lastname}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
              <td style={{
                 display: "flex", 
                 gap: "25px" }}>
                <i className="fas fa-trash text-danger" onClick={() => deleteMutate(ele.id)}></i>
                <i className="fas fa-pencil text-primary" onClick={() => updateData(ele)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      {/* <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Model heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} className="d-flex" controlid="validationCustom01">
                <Form.Label>Title</Form.Label>
                <Form.Control
                required
                type="text"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Label>Body</Form.Label>
                <Form.Control
                required
                type="text"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() =>setShow(false)}>
            Close
          </Button>
          <Button variant="secondary" onClick={() =>setShow(false)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  )
}