const ProfileImage = () => {
	return (
		<div id="profile-image" className="profile-image">
			<div className="row">
				<div className="col-sm-4 col-md-5">
					<div className="about-img">
						<img src={process.env.PUBLIC_URL + '/images/DSC_0522.jpeg'} className="image-stack" alt="profile-pic" />
					</div>
				</div>
				<div className="col-sm-3 "></div>
			</div>
		</div>
	)
}

export default ProfileImage
