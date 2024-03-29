import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineLike,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              No Place like <span className="purple"> 127.0.0.1 </span> 😄            </h1>
            <p className="home-about-body">
            I'm a senior electrical engineering student at Motilal Nehru National Institute of Technology, Prayagraj.
              <br />
              <br />I have a strong foundation in object-oriented programming and 
              I'm proficient in <b className="purple"> C++,Python</b> and <b className="purple"> Javascript </b> 
              <br />
              <br/>I'm also familiar with  machine learning frameworks, such as <b className="purple"> Tensorflow,Scikit-learn </b> ,data tools such as <b className="purple"> Numpy,Pandas </b> and modern JavaScript libraries and frameworks, 
              such as <b className="purple"> React.js and Next.js.</b>
              <br />
              <br />
              <br />
              <Typewriter
      options={{
        strings: [
          "Code",
          "Eat","Sleep","Repeat"
          ,"Let's Collaborate"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              <span className="purple">Connect </span>with me <AiOutlineLike/>
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:chiragsrivastava18@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chiragsrivastava/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Csrivastava003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/18novchirag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
