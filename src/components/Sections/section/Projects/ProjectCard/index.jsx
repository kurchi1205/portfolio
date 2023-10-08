const ProjectCard = ({ project }) => {
	return (
		<div className="col-md-4 mb-5">
			<div className="card" style={{ borderRadius: '15px', maxWidth: '21.875rem' }}>
				<div className="card-body white-box-without-border">
					<h2 className="fw-bolder">{project.projectName}</h2>
					<p className="project-desc text-secondary">{project.projectDescription}</p>
					<a href={project.projectSource} className="button-link project-source" target="_blank" rel="noreferrer">
						View Project
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
