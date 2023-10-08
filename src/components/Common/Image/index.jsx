const Image = ({ imageSource, imageAlt, className = '' }) => {
	return (
		<div className="box-image">
			<img className={`img-fluid ${className}`} src={process.env.PUBLIC_URL + imageSource} alt={imageAlt} />
		</div>
	)
}

export default Image
