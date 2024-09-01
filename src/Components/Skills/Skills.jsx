import mySkills from "./skillsObj"

function Skills() {
  return (
    <div id='skills' className='skills my-10 lg:my-20'>
        <div className="flex justify-center mb-1 sm:mb-1 md:mb-1 lg:mb-1">
            <h1 className='nerko-one-regular text-[32px] font-bold sm:text-2xl md:text-6xl lg:text-6xl'>Skills</h1>
        </div>

    <div className='w-full h-screen'>
        <div className='max-w-screen-xl mx-auto flex flex-col justify-center w-full text-white'>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                {
                    mySkills.map(({id, src, title, style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt={title} className='mt-6 mb-6 w-20 mx-auto'/>
                        <p className=''>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div> 
    </div>
    </div>
  )
}

export default Skills
