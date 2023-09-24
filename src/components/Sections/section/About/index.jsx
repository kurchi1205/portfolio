import Info from './Info'
import MiscInfo from './MiscInfo'
import Card from '../../../Common/Card'

import './about.css'

const About = ({ data }) => {
    const { info } = data.sectionValue
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Card sectionClassName='about-flex'>
                            <Info data={info} />
                            <MiscInfo />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About