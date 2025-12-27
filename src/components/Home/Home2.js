import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const profile = {
    name: "Abu Shaid Islam",
    headline: "Full-Stack Developer",
    location: "Bangladesh",
    primarySkills: ["JavaScript", "React", "Node.js"],
    secondarySkills: ["Next.js", "Go", "C++"],
    interests: ["Web Products", "APIs", "Blockchain"],
    socials: {
      github: "https://github.com/abushaidislam",
      twitter: "https://twitter.com/abushaidislam",
      linkedin: "https://www.linkedin.com/in/abushaidislam/",
      instagram: "https://www.instagram.com/abushaidislam",
    },
  };

  const socialLinks = [
    { href: profile.socials.github, label: "GitHub", Icon: AiFillGithub },
    { href: profile.socials.twitter, label: "Twitter", Icon: AiOutlineTwitter },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
    { href: profile.socials.instagram, label: "Instagram", Icon: AiFillInstagram },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="mb-3" style={{ fontSize: "2.4em" }}>
              Hi, I&apos;m <span className="purple">{profile.name}</span>
            </h1>
            <h2 className="mb-4" style={{ fontSize: "1.25em", opacity: 0.95 }}>
              {profile.headline} <span style={{ opacity: 0.85 }}>·</span>{" "}
              <span style={{ opacity: 0.9 }}>{profile.location}</span>
            </h2>

            <p className="home-about-body" style={{ fontSize: "1.05em" }}>
              I build modern web experiences and scalable back-end services.
              <br />
              <br />I work primarily with{" "}
              <i>
                <b className="purple"> {profile.primarySkills.join(", ")} </b>
              </i>
              , and I&apos;m also comfortable with{" "}
              <i>
                <b className="purple"> {profile.secondarySkills.join(", ")} </b>
              </i>
              .
              <br />
              <br />I&apos;m interested in building{" "}
              <i>
                <b className="purple">{profile.interests.join(", ")}</b>
              </i>
              , focusing on clean UI, performance, and maintainable code.
            </p>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.2em" }}>
                What I&apos;m focused on
              </h3>
              <div className="home-about-body" style={{ fontSize: "1.02em" }}>
                <div>
                  <b className="purple">·</b> Building responsive, accessible UIs
                  with React
                </div>
                <div>
                  <b className="purple">·</b> Designing APIs and services with
                  Node.js
                </div>
                <div>
                  <b className="purple">·</b> Learning and shipping real-world
                  projects consistently
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="mb-2">Let&apos;s connect</h1>
            <p style={{ marginBottom: "0.75rem" }}>
              Feel free to reach out for opportunities, collaborations, or a quick
              chat.
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label} className="social-icons">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="icon-colour home-social-icons"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
