import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiGeeksforgeeks,
    SiLeetcode,
    SiKaggle,
    SiGooglecloud
} from "react-icons/si";
import{
    GrCertificate
} from "react-icons/gr"

function Platform() {
  return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.kaggle.com/csrivastava003" target="blank" color="white"><SiKaggle/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a href="https://auth.geeksforgeeks.org/user/csrivastava003/practice" target="blank"><SiGeeksforgeeks/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a href="https://leetcode.com/csrivastava003/" target="blank"><SiLeetcode/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.cloudskillsboost.google/public_profiles/21ea10b9-8951-445a-be1a-e0f338ff03fa" 
        target="blank" color="white"><SiGooglecloud/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a href="https://drive.google.com/drive/folders/1ZEdTTGyBwQdrsmDixDX-NHyieejPai4o?usp=sharing" 
        target="blank" color="white"><GrCertificate/></a>
        </Col>
        </Row>
    );
}

export default Platform;