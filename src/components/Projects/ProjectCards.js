"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const primaryHref = props.ghLink || props.caseLink || props.demoLink;
  const primaryLabel = props.isBlog
    ? props.primaryLabel || "Blog"
    : props.ghLink
      ? props.ghLabel || "GitHub"
      : props.caseLink
        ? props.caseLabel || "Case Study"
        : props.demoLabel || "Live";
  const PrimaryIcon = props.ghLink ? BsGithub : CgWebsite;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {primaryHref && (
          <Button variant="primary" href={primaryHref} target="_blank" rel="noreferrer">
            <PrimaryIcon /> &nbsp;
            {primaryLabel}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && primaryHref !== props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {props.demoLabel || "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
