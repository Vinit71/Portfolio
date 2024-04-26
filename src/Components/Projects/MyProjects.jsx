import React from 'react'
import './MyProjects.css'
import projectObj from './projectObj.js'

function MyProjects() {
  return (
    <div className='projects'>
        <div className="project-title">
            <h1>My Projects</h1>
        </div>
    <div className="project-section">
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
