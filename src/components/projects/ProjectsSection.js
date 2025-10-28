import React, { useState } from "react";
import clsx from "clsx";
import Title from "../UI/Title";
import SingleProject from "./SingleProject";
import projects from "../../Data/ProjectsData";
import EmailersTab from "./OtherWorks";
import classes from "./ProjectsSection.module.css";
import Container from "../UI/Container";
import OtherWork from "./OtherWorks";
const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState("react");

  const tabs = [
    { id: "react", label: "Websites" },
    { id: "emailers", label: "Emailers" },
    { id: "banners", label: "Banners" },
  ];

  return (
    <section className={classes.projects} id="projects">
      <Container>
        <Title>Selected Projects</Title>
        {/* Tabs Navigation */}
        {/* <div className={classes.tabNav}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={clsx(
                classes.tabButton,
                activeTab === tab.id && classes.activeButton
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div> */}

        {/* Tabs Content */}

          <div className={classes.webProjects}>
            {/* <h2>WEB Projects</h2> */}
            <div className={classes.grid}>
              {projects.slice(0, 4).map((p) => (
                <SingleProject key={p.id} project={p} />
              ))}
            </div>
          </div>
<OtherWork />
        {/* {activeTab === "emailers" && <EmailersTab />}

        {activeTab === "banners" && (
          <section>
            <h2>Animated Banners</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              {[1, 2].map((id) => (
                <div
                  key={id}
                  style={{
                    width: "250px",
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", borderRadius: "8px" }}
                  >
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <p style={{ marginTop: "10px" }}>Banner {id}</p>
                </div>
              ))}
            </div>
          </section>
        )} */}
      </Container>
    </section>
  );
};

export default ProjectsTabs;
