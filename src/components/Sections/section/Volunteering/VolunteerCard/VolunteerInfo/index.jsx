const VounteerInfo = ({ volunteer }) => {
	const { title, description } = volunteer
	return (
		<div className="box-content" style={{ fontFamily: 'Roboto-Regular' }}>
			<div className="row">
				<div className="col-sm-10">
					<p className="volunteer-info-title">{title}</p>
					<p className="text-secondary">{description}</p>
				</div>
			</div>
		</div>
	)
}

export default VounteerInfo
