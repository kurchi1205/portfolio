const ExperienceInfo = ({ experience }) => {
	const { companyName, role, year } = experience
	return (
		<div className="card-body card-content">
			<div className="row">
				<div className="col-sm-10">
					<h5 className="company-name">{companyName}</h5>
					<p className="role text-secondary">{role}</p>
					<p className="experience-date">{year}</p>
				</div>
			</div>
		</div>
	)
}

export default ExperienceInfo
