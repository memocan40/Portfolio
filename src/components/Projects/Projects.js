import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import food from "../../Assets/Projects/foodnet.png";
import todo from "../../Assets/Projects/todolist.jpg";
import calcul from "../../Assets/Projects/calcula.jpg";
import flappy from "../../Assets/Projects/flappy.png";
import fourwins from "../../Assets/Projects/java4gewinnt.png";
import button from "../../Assets/Projects/button.png";

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
                            imgPath={fourwins}
                            isBlog={false}
                            title="4 Wins"
                            description="A Simple 4 Wins Game in Console Developed in Java Jar file download coming soon"
                            ghLink="https://github.com/memocan40/java_4gewinnt"
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

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={food}
                            isBlog={false}
                            title="FoodBlog"
                            description="This was a little group project with some friends just for fun."
                            ghLink="https://github.com/memocan40/the-foo-dnetwork-1"
                            demoLink="https://avrilavril.github.io/the-foo-dnetwork/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            isBlog={false}
                            title="Todo List"
                            description="A Cool todolist in React."
                            ghLink="https://github.com/memocan40/React-todolist"
                            demoLink="https://memocan40.github.io/React-todolist/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={calcul}
                            isBlog={false}
                            title="Calculator"
                            description="A Calculator in React with history."
                            ghLink="https://github.com/memocan40/React-Calculator"
                            demoLink="https://memocan40.github.io/React-Calculator/"
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={flappy}
                            isBlog={false}
                            title="Flappy birds js"
                            description="Flappy birds game copy in my own style."
                            ghLink="https://github.com/memocan40/Flappy"
                            demoLink="https://memocan40.github.io/Flappy/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={button}
                            isBlog={false}
                            title="Dont Click it"
                            description="Dont Click the button."
                            ghLink="https://github.com/memocan40/Interactive-Button"
                            demoLink="https://memocan40.github.io/Interactive-Button/"
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
