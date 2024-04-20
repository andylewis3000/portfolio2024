import ProjectCard from './project-card';

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="container">
        <h2>Recent Projects</h2>
        <div className="recent-projects__content">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <button className="btn btn-secondary">View All Work</button>
      </div>
    </section>
  );
};

export default RecentProjects;
