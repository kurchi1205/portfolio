import Link from '../../../../../Common/Link'

const AwardsInfo = ({ award }) => {
	const { awardName, awardDesc, linkText, linkValue } = award
	return (
		<div className="card-body card-content">
			<div className="row">
				<div className="col-sm-10">
					<p className="awards-title">{awardName}</p>
					<p className="text-secondary awards-description">{awardDesc}</p>
					<Link linkText={linkText} linkValue={linkValue} />
				</div>
			</div>
		</div>
	)
}

export default AwardsInfo
