import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Currently learning own Project  <strong className="purple">.NET Framework</strong>
            </h1>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Heading to learn  <strong className="purple">More & More :)</strong>
            </h1>

        </Row>
    );
}

export default Github;
