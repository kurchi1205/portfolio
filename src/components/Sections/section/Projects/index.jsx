import './projects.css';
import ProjectCard from './ProjectCard';
import SectionHeading from '../../../Common/SectionHeading';
import Card from '../../../Common/Card'

const Projects = ({ data, sectionBackground }) => {
    const projects = data.sectionValue

    return (
        <section id="projects" className={sectionBackground}>
            <SectionHeading heading={"Projects"} underLineClass={"underline-white"}/>
            <div className="container mt-4 custom-container">
                <div className='row'>
                    <Card>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard project={project} key={'project_' + index} />
                            )
                        })
                    }
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Projects