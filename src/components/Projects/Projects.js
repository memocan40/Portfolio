import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                    Loading more...
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Bits-0f-C0de"
                            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                            ghLink="https://github.com/Mehmet Can4419/Bits-0f-C0de"
                            demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Plant AI"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            ghLink="https://github.com/Mehmet Can4419/Plant_AI"
                            demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
