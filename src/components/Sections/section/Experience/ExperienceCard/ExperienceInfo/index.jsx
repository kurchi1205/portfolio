const ExperienceInfo = ({ experience }) => {
    const { companyName, role, year } = experience
    return (
        <div className="box-content">
            <div className="row">
                <div className="col-sm-10">
                    <h4 className="company-name">{companyName}</h4>
                    <h5 className="role">{role}</h5>
                    {/* <p className="experience-description text-secondary">{experienceDesc}</p> */}
                    <div className="w-more">
                        <span className="experience-date">{year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo