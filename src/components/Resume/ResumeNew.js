"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import myImg from "../../Assets/avatar.svg";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import ProjectCard from "../Projects/ProjectCards";
import { projects } from "../Projects/projectsData";

const previewImage = "/cv-preview.png";
const pdfHref = typeof pdf === "string" ? pdf : (pdf && pdf.src) || "";
const pdfUrl = encodeURI(pdfHref);

const profile = {
  name: "Abu Shaid Islam",
  role: "Full-Stack Developer & Designer",
  experience: "2+ years",
  bio:
    "Creative web developer & designer focused on clean UI, performance, and building production-ready web products.",
  highlights: [
    "2+ years of Web Development experience",
    "Built & launched multiple dynamic websites",
    "Expert in UI/UX and SEO optimization",
    "Strong knowledge of React, Next.js, and WordPress",
  ],
  stacks: ["HTML", "CSS", "JavaScript", "React", "Next.js", "WordPress", "Figma"],
  socials: {
    github: "https://github.com/abushaidislam",
    twitter: "https://twitter.com/abushaidislam",
    linkedin: "https://www.linkedin.com/in/abushaidislam/",
    instagram: "https://www.instagram.com/abushaidislam",
  },
  contact: {
    email: "",
  },
};

function ResumeNew() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const ownProjects = projects.filter((project) =>
    (project.ghLink || "").includes("github.com/abushaidislam")
  );
  const featuredProjects = (ownProjects.length ? ownProjects : projects).slice(0, 2);

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container className="resume-page">
        <Row className="resume-page-grid">
          <Col lg={7} className="resume-page-left">
            <div className="resume-hero">
              <div className="resume-hero-badge">ABUSYED</div>
              <h1 className="resume-hero-title">
                {profile.name.split(" ").slice(0, -1).join(" ")}
                <br />
                <span className="purple">{profile.name.split(" ").slice(-1)}</span>
              </h1>

              <p className="resume-hero-subtitle">{profile.bio}</p>

              <div className="resume-hero-list">
                {profile.highlights.map((item) => (
                  <div key={item} className="resume-hero-list-item">
                    <HiOutlineBadgeCheck className="resume-hero-list-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="resume-hero-actions">
                <Button variant="primary" onClick={handleDownload} className="resume-primary-btn">
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary resume-primary-btn resume-primary-btn-outline"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <section className="resume-block">
              <h2 className="resume-block-title">Skills</h2>
              <div className="resume-skill-list">
                {[
                  { label: "Web Development", value: 78, tone: "gold" },
                  { label: "UI/UX Design", value: 64, tone: "blue" },
                  { label: "SEO Optimization", value: 51, tone: "pink" },
                ].map((skill) => (
                  <div key={skill.label} className="resume-skill">
                    <div className="resume-skill-head">
                      <span className="resume-skill-label">{skill.label}</span>
                      <span className="resume-skill-value">{skill.value}%</span>
                    </div>
                    <div className="resume-skill-track">
                      <div
                        className={`resume-skill-bar is-${skill.tone}`}
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <h2 className="resume-block-title">Experience</h2>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">Freelance Web Developer</div>
                  <div className="resume-timeline-meta">
                    <span className="purple">2023 — Present</span>
                    <span className="resume-timeline-sep">·</span>
                    <span>Remote</span>
                  </div>
                  <div className="resume-chip-row">
                    <span className="resume-chip">Next.js</span>
                    <span className="resume-chip">React</span>
                    <span className="resume-chip">WordPress</span>
                  </div>
                </div>

                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">Diploma Commons College</div>
                  <div className="resume-timeline-meta">
                    <span className="purple">2018 — 2020</span>
                    <span className="resume-timeline-sep">·</span>
                    <span>Web & WooCommerce</span>
                  </div>
                  <div className="resume-chip-row">
                    <span className="resume-chip">HTML</span>
                    <span className="resume-chip">CSS</span>
                    <span className="resume-chip">Git</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="resume-block">
              <h2 className="resume-block-title">Achievements</h2>
              <div className="resume-achievements">
                <div className="resume-achievement-card">
                  <div className="resume-achievement-title">Coursera</div>
                  <div className="resume-achievement-subtitle">React JS Development</div>
                  <div className="resume-achievement-meta">2022</div>
                </div>
                <div className="resume-achievement-card">
                  <div className="resume-achievement-title">Learn With Sumit</div>
                  <div className="resume-achievement-subtitle">Web Development Hackathon</div>
                  <div className="resume-achievement-meta">2022</div>
                </div>
              </div>
            </section>

            <section className="resume-block">
              <h2 className="resume-block-title">Tech Stack</h2>
              <Techstack />
              <h3 className="resume-block-subtitle">Design & Tools</h3>
              <Toolstack />
            </section>
          </Col>

          <Col lg={5} className="resume-page-right">
            <div className="resume-side-card">
              <div className="resume-side-header">
                <div className="resume-side-avatar">
                  <img
                    src={myImg}
                    alt={`${profile.name} avatar`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <div className="resume-side-name">{profile.name.toUpperCase()}</div>
                  <div className="resume-side-role">{profile.role}</div>
                </div>
              </div>

              <div className="resume-side-body">
                <div className="resume-side-stats">
                  <div className="resume-side-stat">
                    <div className="resume-side-stat-value">{profile.experience}</div>
                    <div className="resume-side-stat-label">Web Development</div>
                  </div>
                  <div className="resume-side-stat">
                    <div className="resume-side-stat-value">5+</div>
                    <div className="resume-side-stat-label">Dynamic Websites</div>
                  </div>
                </div>

                <p className="resume-side-summary">
                  {profile.bio}
                </p>

                <div className="resume-chip-row resume-chip-row-tight">
                  {profile.stacks.map((tag) => (
                    <span key={tag} className="resume-chip resume-chip-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="resume-side-preview">
                  <img
                    src={previewImage}
                    alt="CV preview"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <Button variant="primary" onClick={handleDownload} className="resume-side-download">
                  <AiOutlineDownload />&nbsp;Download CV
                </Button>
              </div>
            </div>

            <section className="resume-block resume-block-right">
              <h2 className="resume-block-title">Featured Projects</h2>
              <div className="resume-featured-projects">
                {featuredProjects.map((project) => (
                  <div key={project.title} className="resume-featured-item">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-block resume-block-right">
              <h2 className="resume-block-title">Contact</h2>
              <div className="resume-contact-card">
                {profile.contact.email && (
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="resume-contact-row"
                  >
                    <span className="resume-contact-label">Email</span>
                    <span className="resume-contact-value">{profile.contact.email}</span>
                  </a>
                )}
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-contact-row"
                >
                  <span className="resume-contact-label">GitHub</span>
                  <span className="resume-contact-value">abushaidislam</span>
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-contact-row"
                >
                  <span className="resume-contact-label">LinkedIn</span>
                  <span className="resume-contact-value">abushaidislam</span>
                </a>

                <div className="resume-contact-icons">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="resume-icon-btn"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="resume-icon-btn"
                  >
                    <AiOutlineTwitter />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="resume-icon-btn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="resume-icon-btn"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </section>

            <section className="resume-cta">
              <div className="resume-cta-title">Let’s work together!</div>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary resume-cta-btn"
              >
                Hire Me
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
