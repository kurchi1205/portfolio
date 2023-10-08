import SectionHeading from '../../../Common/SectionHeading'
import VolunteerCard from './VolunteerCard'
import Card from '../../../Common/Card'
import './volunteer.css'

const Volunteering = ({ data, sectionBackground }) => {
	const volunteeering = data.sectionValue
	return (
		<section id="volunteering" className={sectionBackground}>
			<div className="container">
				<SectionHeading heading={'Other Activities'} underLineClass={'underline-white'} />
				<div className="row justify-content-center">
					<Card>
						{volunteeering?.map((volunteer, index) => {
							return (
								<div className="col-md-4" key={'volunteer_' + index}>
									<VolunteerCard volunteer={volunteer} />
								</div>
							)
						})}
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Volunteering
