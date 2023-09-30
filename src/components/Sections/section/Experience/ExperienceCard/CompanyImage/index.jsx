import ImageCard from "../../../../../Common/ImageCard"

const CompanyImage = ({ experience }) => {
    const { companyImage } = experience
    return (
        <ImageCard imageSource={`/images/Experience/${companyImage}`} imageAlt={companyImage} />
    )
}

export default CompanyImage