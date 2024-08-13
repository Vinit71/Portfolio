import './MyProjects.css'
import projectObj from './projectObj.js'

function MyProjects() {
  return (
    <div className='projects'>
        <div className="project-title">
            <h1>My Projects</h1>
        </div>
    <div className="project-section grid grid-cols-1 sm:grid-cols-3 gap-8">
        {projectObj.map((project,index)=>{
            return <img key={index} src={project.p_img} alt="" />
        })}
    </div>
    <div className="projects-showmore">
        <p>Show More</p>
        <p>-</p>
        {/* <img src={} alt="" /> */}
    </div>
    </div>
  )
}

export default MyProjects
