import Card from "../../../Common/Card"
import SectionHeading from "../../../Common/SectionHeading"
import EducationCard from "./EducationCard"
import "./education.css"

const Education = ({ data }) => {
    const { sectionTo, sectionValue } = data
    const educations = sectionValue
    return (
        <section id={sectionTo} className="section-brand-background">
            <div className="container">
                <SectionHeading heading={"Education"} underLineClass={"underline-white"}/>
                    <div className="row justify-content-center">
                        <Card>
                            {
                                educations?.map((education, index) => {
                                    return (
                                        <div className="col-md-6">
                                            <EducationCard education={education} key={'education_' + index} />
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

export default Education