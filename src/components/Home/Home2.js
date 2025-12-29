"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const profile = {
    name: "Abu Shaid Islam",
    headline: "Full-Stack Developer",
    location: "Bangladesh",
    summary:
      "I build modern web apps with a focus on clean UI, performance, and maintainable code. I enjoy turning ideas into production-ready products.",
    primarySkills: ["JavaScript", "React", "Node.js"],
    secondarySkills: ["Next.js", "WordPress", "Figma"],
    interests: ["Web Products", "APIs", "Blockchain", "Product Design"],
    highlights: [
      "Responsive UI with accessible components",
      "REST APIs and server-side integrations",
      "Custom WordPress themes tailored to business goals",
      "Professional Figma workflows for fast iterations",
    ],
    currently: ["Next.js", "System design", "Performance optimization", "Figma handoff best practices"],
    socials: {
      github: "https://github.com/abushaidislam",
      twitter: "https://twitter.com/abushaidislam",
      linkedin: "https://www.linkedin.com/in/abushaidislam/",
      instagram: "https://www.instagram.com/abushaidislam",
    },
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description home-about-hero">
            <div className="home-about-badge">
              <span className="home-about-badge-text">ABOUT ME</span>
            </div>

            <h1 className="home-about-title">
              I&apos;m <span className="purple">{profile.name}</span>
              <br />
              Building <span className="main-name">web products</span> people
              enjoy using.
            </h1>

            <div className="home-about-meta">
              <span className="home-about-meta-item">
                <span className="purple">{profile.headline}</span>
              </span>
              <span className="home-about-meta-sep">·</span>
              <span className="home-about-meta-item">{profile.location}</span>
            </div>

            <p className="home-about-lede">{profile.summary}</p>

            <div className="home-about-actions">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary home-about-btn"
              >
                View GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary home-about-btn home-about-btn-outline"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="home-about-cards">
              <div className="home-about-card">
                <h3 className="home-about-card-title">Core stack</h3>
                <div className="home-about-chips">
                  {[...profile.primarySkills, ...profile.secondarySkills].map(
                    (skill) => (
                      <span key={skill} className="home-about-chip">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="home-about-card">
                <h3 className="home-about-card-title">Highlights</h3>
                <div className="home-about-list">
                  {profile.highlights.map((item) => (
                    <div key={item} className="home-about-list-item">
                      <span className="purple">·</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="home-about-card">
                <h3 className="home-about-card-title">Interested in</h3>
                <div className="home-about-chips">
                  {profile.interests.map((item) => (
                    <span key={item} className="home-about-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="home-about-card">
                <h3 className="home-about-card-title">Currently</h3>
                <div className="home-about-chips">
                  {profile.currently.map((item) => (
                    <span key={item} className="home-about-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt={`${profile.name} avatar`}
                style={{ maxWidth: "280px" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
