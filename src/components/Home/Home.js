"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TestimonialV2 from "../ui/testimonial-v2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="home-hero">
                <div className="home-hero-badge">
                  <span className="home-hero-badge-text">
                    Hi There{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                    {" "}I&apos;m <span className="main-name">Abu Syed</span>
                  </span>
                </div>

                <h1 className="home-hero-title">
                  YOUR <span className="purple">IDEAS.</span>
                  <br />
                  YOUR <span className="purple">VISION.</span>
                  <br />
                  YOUR <span className="main-name">PRODUCT.</span>
                </h1>

                <p className="home-hero-subtitle">
                  I build clean, responsive web experiences and reliable
                  back-end services.
                </p>

                <div className="home-hero-type">
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <TestimonialV2 />
    </section>
  );
}

export default Home;
