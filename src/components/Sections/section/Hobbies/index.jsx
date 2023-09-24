import SectionHeading from "../../../Common/SectionHeading"
import HobbiesCard from "./HobbiesCard"
import "./hobbies.css"
import Card from "../../../Common/Card"

const Hobbies = ({ data }) => {
    const hobbies = data.sectionValue
    return (
        <section id="hobbies">
            <div className="container">
                <SectionHeading heading={"Hobbies"} underLineClass={"underline-brand-color"} />
                    <div className="row justify-content-center">
                        <Card>
                            {
                                hobbies?.map((hobby, index) => {
                                    return (
                                        <div className="col-md-2">
                                            <HobbiesCard hobbyInfo={hobby} key={'hobby_' + index} />
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

export default Hobbies