import ProfileImage from "./ProfileImage"

const Info = ({ data }) => {
    return (
        <div className='info col-md-6'>
            <ProfileImage />
            <h3 className="name">{`Hi, I'm ${data.name}`}</h3>
            <p className="text-secondary description">{data.about}</p>
            <p className="profession fw-bolder">{data.profession}</p>
        </div>
    )
}

export default Info