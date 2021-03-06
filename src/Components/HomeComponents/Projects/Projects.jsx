import React, { Fragment } from "react";
import covid from "../../../assets/covid.png";
import herbs from "../../../assets/herbs.png";
import shoty from "../../../assets/shoty.png";
import alan from "../../../assets/alan.png";
import hang from "../../../assets/hang.png";
import face from "../../../assets/face.png";
import hulu from "../../../assets/hulu.png";
import qu from "../../../assets/qu.png";

import "./ProjectStyle.css";
import MainText from "../../MainText/MainText";

const Projects = () => {
  const projects = ProjectItems;
  return (
    <Fragment>
      <section id="work-a" className="text-center py-3">
          <MainText>My Projects</MainText>
        <div className="container">
          <div className="items">
            {projects.map((project) => (
              <div key={project.id} className="item">
                <div className="item-image">
                  <img src={project.img} alt="" />
                </div>

                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">{project.tool}</p>
                    <h2 className="item-text-title">{project.name}</h2>
                    {project.githubLink === "" ? null : (
                      <div>
                        <button className="repo">
                          <a
                            style={{ color: "#00bcd4" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.githubLink}
                          >
                            visit github
                          </a>
                        </button>
                        <button className="web">
                          <a
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.websiteLink}
                          >
                            visit website
                          </a>
                        </button>
                      </div>
                    )}
                    <p style={{ marginTop: "1rem" }}>{project.more}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Projects;

const ProjectItems = [
  {
    id: 1,
    name: "Hangout Club",
    tool: "React, Redux & Firebase",
    img: hang,
    githubLink: "https://github.com/MohamedAhmed122/Our-event",
    websiteLink: "https://re-vents-e73b4.firebaseapp.com",
    more: "",
  },
  {
    id: 2,
    name: "Newspaper Reader",
    tool: "Alan Ai & React",
    img: alan,
    githubLink: "https://github.com/MohamedAhmed122/Alan-ai-News-app",
    websiteLink: "https://alan-ai-newsreader.web.app/",
    more: "",
  },
  {
    id: 3,
    name: "SHOTY Clothing App",
    tool: "React, Redux & Firebase",
    img: shoty,
    githubLink: "https://github.com/MohamedAhmed122/Shoty",
    websiteLink: "https://shoty-db.web.app/",
    more: "Uncompleted",
  },
  {
    id: 4,
    name: "Facebook Clone",
    tool: "React, Redux & Firebase",
    img: face,
    githubLink: "https://github.com/MohamedAhmed122/Facebook-Clone",
    websiteLink: "https://facebook-clone-490bc.web.app",
    more: "Simple Cone",
  },
  {
    id: 5,
    name: "Covid-19 Tracker",
    tool: "React & Material UI",
    img: covid,
    githubLink: "https://github.com/MohamedAhmed122/Covid-19",
    websiteLink: "https://covid1-19.herokuapp.com",
    more: "",
  },
  {
    id: 6,
    name: "Herbs Trade",
    tool: "React & Material UI",
    img: herbs,
    githubLink: "https://github.com/MohamedAhmed122/Herbs-Trade",
    websiteLink: "https://dreamy-heisenberg-d906bc.netlify.app",
    more: "I should have sold it",
  },
  {
    id: 8,
    name: "Hulu Clone",
    tool: "React & Material UI",
    img: hulu,
    githubLink: "https://github.com/MohamedAhmed122/Hulu",
    websiteLink: "https://hulu-33bd6.web.app",
    more: "Simple Clone",
  },
  {
    id: 7,
    name: "Slack Clone",
    tool: "React",
    img:
      "https://www.nonprofitmarketingguide.com/blog/wp-content/uploads/2019/07/slacklogo.png",
    githubLink: "",
    websiteLink: "",
    more: "Working on it",
  },
  {
    id: 9,
    name: "Your Project is coming Next",
    tool: "",
    img: qu,
    githubLink: "",
    websiteLink: "",
    more: "",
  },
];
