import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, this is <span className="purple">Chirag Srivastava </span>
            from <span className="purple"> Unnao, India.</span>
            <br /> I am a senior pursuing  B.Tech in Electrical Engineering,at
            Motilal Nehru National Institute of Technology, Prayagraj
            <br />
            <br />
            <br />
            Familiar with web development, machine learning and data visualization.
            Currently exploring MlOps and Machine learning!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trust me I'm a programmer"{" "}
          </p>
          <footer className="blockquote-footer">My code</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
