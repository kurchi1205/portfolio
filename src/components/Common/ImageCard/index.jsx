const ImageCard = (props) => {
    const { imageSource, className, imageAlt } = props
    return (
        <div className="img-card">
            <img src={process.env.PUBLIC_URL + imageSource} alt={imageAlt} className={`img-fluid ${className}`} />
        </div>
    )
}

export default ImageCard