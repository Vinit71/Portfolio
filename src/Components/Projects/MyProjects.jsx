import { useState } from 'react'
import projectObj from './projectObj.js'

function MyProjects() {
  const [projects, setProjects] = useState(projectObj.slice(0,3));
  const [projectsBtn, setProjectsBtn] = useState("Show More");
  return (
    <div id='projects' className="mt-40 sm:mt-0 md:mt-10 lg:my-20 flex flex-col items-center justify-center gap-7 sm:gap-10 md:gap-10 lg:gap-10 mx-[60px]">
    <div className="">
      <h1 className="nerko-one-regular text-[32px] font-bold sm:text-2xl md:text-6xl lg:text-6xl">My Projects</h1>
    </div>

{/* cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-20 md:gap-20 lg:gap-20">
  {projects.map((project, index) => (
    <div key={index} className="relative group">
      <img
        src={project.p_img}
        alt=""
        className="w-full h-full object-cover bg-yellow-500 transition-transform duration-500 cursor-pointer hover:scale-105 hover:bg-white rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg">
        <p className="text-white text-center p-2">{project.p_desc}</p>
      </div>
      <p className="text-center text-2xl font-semibold mt-1 sm:mt-2 md:mt-3 lg:mt-3 text-white shadow-md">
  {project.p_name}
</p>

    </div>
  ))}
</div>

{/* show more/less btn */}
    <button onClick={()=>{
        if(projectsBtn=="Show More"){
          setProjects(projectObj);
          setProjectsBtn("Show Less");
        }else{
          setProjects(projectObj.slice(0,3));
          setProjectsBtn("Show More");
        }
      }} className="flex items-center font-semibold text-lg p-2 border-2 border-white rounded-full gap-2.5 cursor-pointer transition-all duration-500 mb-1 hover:gap-5 mt-10">
        <p>{projectsBtn}</p>
        <p>&rarr;</p>
        {/* <img src={} alt="" /> */}
    </button>
    </div>
  )
}

export default MyProjects
