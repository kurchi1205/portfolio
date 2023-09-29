import AwardsCard from "./AwardsCard"
import SectionHeading from "../../../Common/SectionHeading"
import Card from "../../../Common/Card"

const Awards = ({ data }) => {
    const { sectionTo, sectionValue, sectionName } = data
    const awards = sectionValue
    return (
        <section id={sectionTo}>
            <div className="container">
                <SectionHeading heading={sectionName} underLineClass={"underline-brand-color"}/>
                <Card>
                <div className="row justify-content-center">
                        {
                            awards?.map((award, index) => {
                                return (
                                    <div className="col-md-4" key={'award_' + index}>
                                        <AwardsCard award={award} />
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

export default Awards