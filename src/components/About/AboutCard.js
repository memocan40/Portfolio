import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Mehmet Can  </span>
                        from <span className="purple"> "Stuttgart".</span>
                        <br />I am a Software Developer
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Sports 
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Coding, Learning
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                    "Dream big, code even bigger!"{"Embrace the bugs, conquer the challenges "}
                    </p>
                    <footer className="blockquote-footer">Mehmet Can</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
