"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I&apos;m <span className="purple">Abu Shaid Islam</span> from{" "}
            <span className="purple">Bangladesh</span>.
            <br />
            <br />I build modern websites and web applications, focusing on clean
            UI, performance, and a great user experience.
            <br />
            <br />I also work with <span className="purple">WordPress</span> for
            business websites and landing pages, and I design professional
            interfaces in <span className="purple">Figma</span>.
            <br />
            <br />Here are a few things I enjoy working on:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> WordPress websites (themes, customization, content)
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX design in Figma (wireframes, prototypes)
            </li>
            <li className="about-activity">
              <ImPointRight /> React & Node.js projects (front-end + APIs)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build simple, useful products — and keep improving."{" "}
          </p>
          <footer className="blockquote-footer">Abu Shaid Islam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
