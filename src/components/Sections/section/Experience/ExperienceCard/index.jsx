import CompanyImage from "./CompanyImage"
import ExperienceInfo from "./ExperienceInfo"

const ExperienceCard = ({ experience }) => {
    return (
        <div className="card-box">
            <CompanyImage experience={experience} />
            <ExperienceInfo experience={experience}/>                
        </div>
    )
}

export default ExperienceCard