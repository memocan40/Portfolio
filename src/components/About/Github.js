import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            "Stay hungry for impact, for the hunger to make a difference through your code will drive you to create solutions that truly matter."  <strong className="purple">#Solutionist</strong>
            </h1>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Stay focused, balance, and code with   <strong className="purple">purpose</strong>
            </h1>

        </Row>
    );
}

export default Github;
