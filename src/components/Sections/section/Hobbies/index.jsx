import SectionHeading from '../../../Common/SectionHeading'
import HobbiesCard from './HobbiesCard'
import './hobbies.css'
import Card from '../../../Common/Card'

const Hobbies = ({ data, sectionBackground }) => {
	const hobbies = data.sectionValue
	return (
		<section id="hobbies" className={sectionBackground}>
			<div className="container">
				<SectionHeading heading={'Hobbies'} underLineClass={'underline-brand-color'} />
				<Card sectionClassName="custom-gap">
					{hobbies?.map((hobby, index) => {
						return (
							<div className="col-2" key={'hobby_' + index}>
								<HobbiesCard hobbyInfo={hobby} />
							</div>
						)
					})}
				</Card>
			</div>
		</section>
	)
}

export default Hobbies
