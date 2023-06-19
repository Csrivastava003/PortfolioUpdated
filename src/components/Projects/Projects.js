import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SmartBrain from "../../Assets/Projects/SmartBrain.png"
import heart from "../../Assets/Projects/health.jpg";
import dog from "../../Assets/Projects/dogt.webp"
import portfolio from "../../Assets/Projects/portfolio.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartBrain}
              isBlog={false}
              title="SmartBrain"
              description="A web application which allows user to upload a image and detect face.
              Built with React.js for frontend, Node.js for backend server, PostgresSql as the database, deployed on render."
              ghLink="https://github.com/Csrivastava003/smart_brain"
              demoLink="https://smartbrain-ahnl.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dog}
              isBlog={false}
              title="Dog Image Classifier"
              description="A dog breed classification model using TensorFlow and Keras, achieving an 
              accuracy of 80 percent.We're dealing with images (unstructured data) using  Deep learning/transfer learning
              Used the dog image dataset from Kaggle and trained a image classifer model for oveer 120 different breeds."
              ghLink="https://github.com/Csrivastava003/DogImageClassifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease Classifier"
              description="Developed a heart disease classification model using the Scikit-learn, pandas, Numpy, and 
              Matplotlib libraries in Python that achieves an
              accuracy of 85.Through this project we determine whether a person can have a heart disease in future or not?
              Trained and evaluated various machine learning models, including logistic regression,
              using scikit-learn"
              ghLink="https://github.com/Csrivastava003/HeartDiseaseClassifier"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Personal portfolio website created using React.js"
              ghLink="https://github.com/Csrivastava003/PortfolioUpdated"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
