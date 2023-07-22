import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Us <span className="purple"> INTRODUCE </span> Ourself
            </h1>
            <p className="home-about-body">
                 We are the U.S. Government 🏛
              <br />
              <br />We are the government of the State of Los Santos, and we are responsible for any bureaucratic organization. We are the first and last government that
              <i>
                <b className="purple"> America will have! </b>
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        <i>
                <b className="purple">Only on ParagonV</b>
              </i>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
