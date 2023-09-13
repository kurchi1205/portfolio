import SectionHeading from "../../../Common/SectionHeading"
import ExperienceCard from "./ExperienceCard"
import "./experience.css"

const Experience = ({ data }) => {
    const experiences = data.sectionValue
    return (
        <section id="experience">
            <div className="container">
                <SectionHeading heading={"Experience"} underLineClass={"underline-brand-color"}/>
                <div className="row justify-content-center">
                        {
                            experiences?.map((experience, index) => {
                                return (
                                    <div className="col-md-4">
                                        <ExperienceCard experience={experience} key={'experience_' + index} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}

export default Experience