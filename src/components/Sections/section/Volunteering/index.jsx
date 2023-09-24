import SectionHeading from "../../../Common/SectionHeading"
import VolunteerCard from "./VolunteerCard"
import Card from "../../../Common/Card"

const Volunteering = ({ data }) => {
    const volunteeering = data.sectionValue
    return (
        <section id="volunteering">
            <div className="container">
                <SectionHeading heading={"Volunteering"} underLineClass={"underline-brand-color"}/>
                <Card>
                    <div className="row justify-content-center">
                        {
                            volunteeering?.map((volunteer, index) => {
                                return (
                                    <div className="col-md-4">
                                        <VolunteerCard volunteer={volunteer} key={'volunteer_' + index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default Volunteering