import ProfileImage from "./ProfileImage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Info = ({ data }) => {
    return (
        <div className='info col-md-6'>
            <ProfileImage />
            <div className="socials">
                <ul style={{paddingLeft: 0, marginBottom: 0, paddingTop: 0}} >
                    {
                        data.socials.map((social, index) => {
                            const { link, icon } = social
                            return (
                                <li key={"social_" + index}>
                                    <a href={link} target='blank'>
                                        <span className="ico-circle">
                                            <FontAwesomeIcon icon={icon} className='icons'/>
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            <h3 className="name">{`Hi, I'm ${data.name}`}</h3>
            <p className="text-secondary description">{data.about}</p>
            <p className="profession fw-bolder">{data.profession}</p>
        </div>
    )
}

export default Info