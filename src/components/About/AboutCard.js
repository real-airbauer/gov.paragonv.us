import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We are the <span className="purple">United States </span>
             <span className="purple">Government</span>
            <br /> The U.S. government is a complex and multifaceted entity that performs a wide range of duties and responsibilities to ensure the well-being of the country and its citizens. As a federal republic, the U.S. government consists of three equal levels - the federal level, the state level, and the local level - that operate in harmonious coexistence.
At the federal level, the U.S. government is characterized by three independent powers - the executive, legislative, and judicial branches. The President of the United States, the head of the executive branch, is responsible for implementing laws, foreign policy, and managing federal agencies. The legislative branch consists of Congress, which is made up of two chambers - the Senate and the House of Representatives. It has the power to enact laws and approve the budget. The Judicial Branch is the Supreme Court of the United States, which is responsible for interpreting laws and arbitrating constitutional issues.
The U.S. government seeks to promote the welfare of its citizens by developing policies that ensure economic stability, social justice, national security, and the protection of fundamental rights. Supporting education, research, and infrastructure are priority goals, as are protecting the environment and addressing global challenges such as climate change and terrorism.
            <br />
           </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "E pluribus unum"{" "}
          </p>
          <footer className="blockquote-footer">U.S. Congress</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
