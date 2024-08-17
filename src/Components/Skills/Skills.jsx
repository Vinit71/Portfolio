import html from '../../assets/skillsImg/html.png'
import css from '../../assets/skillsImg/css.png'
import js from '../../assets/skillsImg/js.png'
import php from '../../assets/skillsImg/php.png'
import mySQL from '../../assets/skillsImg/mySQL.png'
import react from '../../assets/skillsImg/react.png'
import java from '../../assets/skillsImg/java.png'
import cpp from '../../assets/skillsImg/cpp.png'
import github from '../../assets/skillsImg/github.png'

// import './Skills.css'
function Skills() {
    const mySkills = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: js,
            title: 'JS',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: php,
            title: 'PHP',
            style: 'shadow-purple-500'
        },
        {
            id:6,
            src: mySQL,
            title: 'mySQL',
            style: 'shadow-blue-500'
        },
        {
            id:7,
            src: java,
            title: 'JAVA',
            style: 'shadow-orange-500'
        },
        {
            id:8,
            src: cpp,
            title: 'CPP',
            style: 'shadow-blue-800'
        },
        {
            id:9,
            src: github,
            title: 'GITHUB',
            style: 'shadow-blue-500'
        }
    ]
  return (
    <div className='skills mt-10'>
        <div className="flex justify-center mb-1 sm:mb-1 md:mb-1 lg:mb-1">
            <h1 className='text-[32px] font-bold sm:text-2xl md:text-6xl lg:text-6xl'>Skills</h1>
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
