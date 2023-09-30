import VolunteerImage from "./VolunteerImage"
import VolunteerInfo from "./VolunteerInfo"

const VolunteerCard = ({ volunteer }) => {
    return (
        <div className="volunteer-card-box">
            <VolunteerImage volunteer={volunteer} />
            <VolunteerInfo volunteer={volunteer}/>                
        </div>
    )
}

export default VolunteerCard