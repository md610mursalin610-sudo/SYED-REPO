import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const previewImage = `${process.env.PUBLIC_URL || ""}/cv-preview.png`;
const pdfUrl = encodeURI(pdf);

function ResumeNew() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <h1 className="project-heading" style={{ marginBottom: "10px" }}>
            My <strong className="purple">Resume</strong>
          </h1>
          <p
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: 0,
              maxWidth: "620px",
            }}
          >
            Preview the design version of my CV below. Click the button to get
            the full PDF.
          </p>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "960px" }}>
            <img
              src={previewImage}
              alt="CV preview"
              style={{
                width: "100%",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              loading="lazy"
            />
            <hr></hr>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
