import projectObj from './projectObj.js'

function MyProjects() {
  return (
    <div className="mt-40 sm:mt-0 md:mt-10 lg:my-20 flex flex-col items-center justify-center gap-7 sm:gap-10 md:gap-10 lg:gap-10 mx-[60px]">
    <div className="">
      <h1 className="text-[32px] font-bold sm:text-2xl md:text-6xl lg:text-6xl">My Projects</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 md:gap-20 lg:gap-20">
      {projectObj.map((project, index) => (
        <div key={index} className="">
          <img
            src={project.p_img}
            alt=""
            className="w-full h-full object-cover bg-yellow-500 transition-transform duration-500 cursor-pointer hover:scale-105 hover:bg-white rounded-lg "
          />
        </div>
      ))}
    </div>
    <button className="flex items-center font-semibold text-lg p-2 border-2 border-white rounded-full gap-2.5 cursor-pointer transition-all duration-500 mb-1 hover:gap-5">
        <p>Show More</p>
        <p>-</p>
        {/* <img src={} alt="" /> */}
    </button>
    </div>
  )
}

export default MyProjects
