import Info from './Info'
import MiscInfo from './MiscInfo'
import Card from '../../../Common/Card'
import TechInfo from './TechInfo'

import './about.css'

const About = ({ data }) => {
	const { info, sectionBackground, tech } = data.sectionValue
	return (
		<section id="about" className={sectionBackground}>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<Card sectionClassName="about-flex">
							<Info data={info} />
							<TechInfo data={tech} />
							{/* <MiscInfo /> */}
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
