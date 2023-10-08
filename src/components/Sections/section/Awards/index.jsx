import AwardsCard from './AwardsCard'
import SectionHeading from '../../../Common/SectionHeading'
import Card from '../../../Common/Card'
import './awards.css'

const Awards = ({ data, sectionBackground }) => {
	const { sectionTo, sectionValue, sectionName } = data
	const awards = sectionValue
	return (
		<section id={sectionTo} className={sectionBackground}>
			<div className="container">
				<SectionHeading heading={sectionName} underLineClass={'underline-brand-color'} />
				<Card>
					{awards?.map((award, index) => {
						return (
							<div className="col-md-4" key={'award_' + index}>
								<AwardsCard award={award} />
							</div>
						)
					})}
				</Card>
			</div>
		</section>
	)
}

export default Awards
