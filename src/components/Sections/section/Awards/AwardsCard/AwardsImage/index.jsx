import ImageCard from "../../../../../Common/ImageCard"

const AwardsImage = ({ image }) => {
    return (
        <ImageCard imageSource={`/images/Awards/${image}`} imageAlt={image} />
    )
}

export default AwardsImage