import sectionsData from "../../config/sectionsData"

const Sections = () => {
    const sections = sectionsData.slice(1)

    return (
        <main id="sections" className="sections">
            {
                sections.map((section, index) => {
                    const sectionName = section.sectionName
                    const SectionComponent = section.sectionComponent
                    return (
                        SectionComponent ? <SectionComponent key={sectionName + index} data={section} /> : null
                    )
                })
            }       
        </main>
    )
}

export default Sections