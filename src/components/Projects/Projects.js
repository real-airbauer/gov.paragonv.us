import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/Seal_of_the_United_States_Department_of_Commerce.svg.png";
import big from "../../Assets/Projects/Seal_of_the_President_of_the_United_States.png";
import doj from "../../Assets/Projects/Seal_of_the_United_States_Department_of_Justice 2.png";
import discord from "../../Assets/Projects/chatify.png";
import innen from "../../Assets/Projects/Seal_of_the_United_States_Department_of_the_Interior.svg.png";
import usss from "../../Assets/Projects/USSS-Wordmark.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Unsere <strong className="purple">Links </strong>
        </h1>
        <p style={{ color: "white" }}>
          Hier findet ihr alle wichtigen Links :3
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}   // bild import   
              isBlog={false}
              title="Discord"
              description="Offizieller Discord Server des U.S. Governments"
              demoLink="https://discord.gg/BdcpPXFv9X"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usss}
              isBlog={false}
              title="United States Secret Service"
              description="Ensure the safety of the president, the vice president, their families, the White House, the vice president’s residence, visiting foreign heads of state, former United States presidents and their spouses, and events of national significance."
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doj}
              isBlog={false}
              title="Department of Justice"
              description="Das DOJ-Justizministerium ist die Legislative Behörde des Staates. Es Spricht Urteile, erlässt Gesetze und weiteres."
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Wirtschaftsministerium"
              description="Unter der Wirtschaftspolitik versteht man die Gesamtheit der Maßnahmen, mit denen der Staat regelnd und gestaltend, durch dazu legitimierte Instanzen, in die Wirtschaft eingreift. Wirtschaftspolitik unterliegt dem bestehenden Wirtschaftssystem und bestimmt die Regeln wie die Wirtschaftssubjekte zusammenwirken sollen. Wirtschaftspolitik ist so ein Teilgebiet der allgemeinen staatlichen Politik. "
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={innen}
              isBlog={false}
              title="Innenministerium"
              description="Das Innenministerium ist als Hüter der Verfassung zu verstehen. Jegliche Untersuchung Verfassungswiedriger Handlungen fallen in ihren aufgabenbereich."
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={big}
              isBlog={false}
              title="Präsidialadministration"
              description=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
