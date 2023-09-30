import ImageCard from "../../../../../Common/ImageCard"

const VolunteerImage = ({ volunteer }) => {
    const { image } = volunteer
    return (
        <ImageCard imageSource={`/images/Volunteer/${image}`} imageAlt={image} />
    )
}

export default VolunteerImage