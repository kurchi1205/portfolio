import SectionHeading from "../../../Common/SectionHeading"
import VolunteerCard from "./VolunteerCard"
import Card from "../../../Common/Card"

const Volunteering = ({ data }) => {
    const volunteeering = data.sectionValue
    return (
        <section id="volunteering" className="section-brand-background">
            <div className="container">
                <SectionHeading heading={"Other Activities"} underLineClass={"underline-white"}/>
                    <div className="row justify-content-center">
                        <Card>
                            {
                                volunteeering?.map((volunteer, index) => {
                                    return (
                                        <div className="col-md-4">
                                            <VolunteerCard volunteer={volunteer} key={'volunteer_' + index} />
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

export default Volunteering