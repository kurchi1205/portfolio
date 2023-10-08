import AwardsImage from './AwardsImage'
import AwardsInfo from './AwardsInfo'

const AwardsCard = ({ award }) => {
	const { awardImage } = award
	return (
		<div className="awards-card-box">
			<AwardsImage image={awardImage} />
			<AwardsInfo award={award} />
		</div>
	)
}

export default AwardsCard
