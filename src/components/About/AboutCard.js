import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, this is <span className="purple">Chirag Srivastava </span>
            from <span className="purple"> Unnao, India.</span>
            <br /> I am a senior at
            Motilal Nehru National Institute of Technology, Prayagraj, 
            pursuing  B.Tech in Electrical Engineering,
            <br />
            <br />
            I've had the opportunity to take a variety of programming courses, and I've also worked on a number of 
            personal coding projects. I've learned a lot about different programming languages, algorithms, and data structures. 
            I've also learned how to debug code, write clean and efficient code, and test my code thoroughly.
            <br />
            <br />
            <br/>
            Familiar with web development, machine learning and data visualization.
            Currently exploring MlOps and Machine learning!
          </p>
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
