const ProfileImage = () => {
    return (
        <div id="profile-image" className="profile-image">
            <div>
                <img src={process.env.PUBLIC_URL + "/images/profile_pic_rect_back.png"} className="image-stack rect" alt="rect" />
                <img src={process.env.PUBLIC_URL + "/images/profile_picture.jpg"} className="image-stack" alt="profile-pic" />
            </div>
        </div>
    )
}

export default ProfileImage