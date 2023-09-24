import ProfileImage from "./ProfileImage"

const Info = ({ data }) => {
    return (
        <div className='info col-md-6'>
            <ProfileImage />
            <h1 className="name">About Me</h1>
            <p className="text-secondary description">{data.about}</p>
            <p className="profession fw-bolder">{data.profession}</p>
        </div>
    )
}

export default Info