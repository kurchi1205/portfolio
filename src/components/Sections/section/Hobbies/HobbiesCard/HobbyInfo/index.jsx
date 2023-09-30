const HobbyInfo = ({ hobbyInfo }) => {
    const { hobby } = hobbyInfo
    return (
        <div className="hobby-content">
            <div className="row">
                <div className="col-sm-12">
                    <p>{hobby}</p>
                </div>
            </div>
        </div>
    )
}

export default HobbyInfo