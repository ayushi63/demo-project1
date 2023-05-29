import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContainerExample(){
    return (
      <Container>
        <Row style={{backgroundColor: "red", color: "white", padding: "20px"}}>
            <Col lg={3} sm={12}>
                Column 1
            </Col>

            <Col lg={3} sm={12}>
                Column 2
            </Col>

            <Col lg={3} sm={12}>
                Column 3
            </Col>

            <Col lg={3} sm={12}>
                Column 4
            </Col>
        </Row>

        <Row
        style={{ backgroundColor: "green", color:"white" , padding: "20px"}}>
            <div className="col-lg-3 col-sm-12">1 of 1</div>
            <div className="col-lg-3 col-sm-12">1 of 1</div>
            <div className="col-lg-3 col-sm-12">1 of 1</div>
            <div className="col-lg-3 col-sm-12">1 of 1</div>
        </Row>
      </Container>
    );
}

export default ContainerExample;