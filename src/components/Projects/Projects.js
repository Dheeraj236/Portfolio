import React from "react";
import "../Projects/Projects.css";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

function Projects(props) {
  const myProfileDetails = props.details;

  const openProjectsURL = () => {
    window.open(myProfileDetails.profile_links.github.link, "_blank");
  };


  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row" style={{ marginTop: "30px" }}>
          {myProfileDetails.projects.map((project) => {
            return (
              <div
                key={project.id}
                className="col-12 col-md-4 project-tile"
                style={{ marginBottom: "20px" }}
              >
                <Card
                  className="projectcard-style"
                  variant="outlined"
                  style={{
                    display: "block",
                    backgroundColor: "rgb(46, 47, 52)",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">{project.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {project.subtitle}
                    </CardSubtitle>
                  </CardBody>
                  <img
                    alt="project"
                    src={project.image}
                    width="94%"
                    height="60%"
                    style={{ marginLeft: "3%" }}
                  />
                  <CardBody>
                  {/* <CardLink
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="projectbutton"
                    >
                      Live
                    </CardLink> */}
                    <CardLink
                      href={project.FE_ghlink}
                      target="_blank"
                      rel="noreferrer"
                      className="projectbutton"
                    >
                      Frontend
                    </CardLink>
                    <CardLink
                      href={project.BE_ghlink}
                      target="_blank"
                      rel="noreferrer"
                      className="projectbutton"
                    >
                      Backend
                    </CardLink>
                    <br></br> 
                    <p
                      className="project-desc"
                    >
                      Skills: {project.skills}
                    </p>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="text-center">
            <button
              className="view-projects view-projects--specs"
              onClick={() => openProjectsURL()}
            >
              More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
