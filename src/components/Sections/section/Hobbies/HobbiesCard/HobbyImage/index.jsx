const HobbyImage = ({ image }) => {
	return <img src={process.env.PUBLIC_URL + `/images/Hobbies/${image}`} alt={image} className="img-fluid" />
}

export default HobbyImage
