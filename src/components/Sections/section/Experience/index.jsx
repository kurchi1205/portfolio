import SectionHeading from "../../../Common/SectionHeading"
import ExperienceCard from "./ExperienceCard"
import Card from "../../../Common/Card"
import "./experience.css"

const Experience = ({ data, sectionBackground }) => {
    const experiences = data.sectionValue
    return (
        <section id="experience" className={sectionBackground}>
            <div className="container">
                <SectionHeading heading={"Experience"} underLineClass={"underline-brand-color"}/>
                    <div className="row justify-content-center">
                        <Card>
                            {
                                experiences?.map((experience, index) => {
                                    return (
                                        <div className="col-md-4" key={'experience_' + index} >
                                            <ExperienceCard experience={experience} />
                                        </div>
                                    )
                                })
                            }
                        </Card>
                    </div>
            </div>
        </section>
    )
}

export default Experience