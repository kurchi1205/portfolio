import Card from '../../../Common/Card'
import SectionHeading from '../../../Common/SectionHeading'
import EducationCard from './EducationCard'
import './education.css'

const Education = ({ data, sectionBackground }) => {
	const { sectionTo, sectionValue } = data
	const educations = sectionValue
	return (
		<section id={sectionTo} className={sectionBackground}>
			<div className="container">
				<SectionHeading heading={'Education'} underLineClass={'underline-white'} />
				<div className="row justify-content-center">
					<Card>
						{educations?.map((education, index) => {
							return (
								<div className="col-md-6" key={'education_' + index}>
									<EducationCard education={education} />
								</div>
							)
						})}
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Education
