import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function Portfolio(props) {
  const { projects } = props;

  const renderProjects = (projects) => {
    return projects.map((project, i) => {
      return (
        <div className="project" key={`project-${project.category}-${i}`}>
          <img src={project.img} alt={`project-${project.category}-${i}`} />
        </div>
      );
    });
  };

  return (
    <div className="portfolio">
      <ReactCSSTransitionGroup
        transitionName="portfolio"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {renderProjects(projects)}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default Portfolio;
