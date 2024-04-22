// Setup Data.js and map over relavent data

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img
          src="https://placehold.co/600x400"
          alt="Image"
          width="300"
          height="300"
        />
      </div>
      <div className="project-card__content">
        <h3>Project Name</h3>
        <h4>Project Type</h4>
        <button className="btn btn-primary">View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
