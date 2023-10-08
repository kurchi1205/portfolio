import sectionsData from '../../config/sectionsData'

const Sections = () => {
	const sections = sectionsData.slice(1)

	return (
		<main id="sections" className="sections" style={{ marginBottom: '100px' }}>
			{sections.map((section, index) => {
				const sectionName = section.sectionName
				const SectionComponent = section.sectionComponent
				const sectionBackground = index % 2 !== 0 ? 'section-brand-background' : ''
				return SectionComponent ? <SectionComponent key={sectionName + index} data={section} sectionBackground={sectionBackground} /> : null
			})}
		</main>
	)
}

export default Sections
