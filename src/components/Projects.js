import {
    SiJavascript as JSIcon, 
    SiCss3 as CSSIcon, 
    SiPostgresql as PostgresIcon, 
    SiNodedotjs as NodeIcon, 
    SiExpress as ExpressIcon,
    SiReact as ReactIcon,
    SiTailwindcss as TailwindIcon,
    SiCplusplus as CppIcon,
    SiHtml5 as HTMLIcon,
    SiJava as JavaIcon,
    SiReactrouter as ReactRouterIcon
} from 'react-icons/si';

const Projects = () => {
    return (
        <div className="mt-[100px] pt-[20px] flex justify-center items-center min-h-[710px]">
            <ProjectCard 
                projTitle='The Killers Music Player'
                projLink='http://thekillersmusic.herokuapp.com'
                vidSrc='https://www.youtube.com/embed/R2AtS6j5exM'
                description = 
                    {'I created this web app as my Capstone Project for DevMountain. It is a fan page for the Las Vegas band "The Killers" that allows me to feature information about the band, their music, and host my own covers of their music. I have made an admin portal to maintain the site. Use login and password of "admin" to access the portal. Click the project title above to visit the site.'}
                skillsIcons = {[
                    <SkillWithName 
                        icon={<ReactIcon size="30" className="hover:text-[#4fb7d3] text-gray-400 mr-4" />} 
                        skillName='React'
                    />,
                    <SkillWithName 
                        icon={<ReactRouterIcon size="30" className="hover:text-[#c5021a] text-gray-400 mr-4" />} 
                        skillName='React Router'
                    />,
                    <SkillWithName
                        icon={<TailwindIcon size="30" className='hover:text-[#07adca] text-gray-400 mr-4' />}
                        skillName='Tailwind CSS'
                    />,
                    <SkillWithName
                        icon={<NodeIcon size="30" className='hover:text-[#5aa844] text-gray-400 mr-4' />}
                        skillName='NodeJS'
                    />,
                    <SkillWithName
                        icon={<ExpressIcon size="30" className='hover:text-white text-gray-400 mr-4' />}
                        skillName="ExpressJS"
                    />,
                    <SkillWithName
                        icon={<PostgresIcon size="30" className='hover:text-[#30628a] text-gray-400 mr-4' />}
                        skillName='Postgres'
                    />,
                ]}

            />         
        </div>
    )
}

const ProjectCard = ({ projTitle, projLink, vidSrc, description, skillsIcons }) => {
    return (
        <div className="h-[600px] w-[330px] px-[10px] py-5 border-[1px] border-white rounded-lg flex items-center flex-col">
            <a href={projLink} target="_blank" rel="noopener noreferrer">
                <h1 className="text-[#c1c9d9] hover:text-white hover:cursor-pointer font-bold text-[20pt]">
                    {projTitle}
                </h1>
            </a> 
            <hr className="w-[95%] h-[1px] text-white my-5" />
            <DemoVideo vidSrc={vidSrc} />
            <ProjDescription description={description}/>
            <SkillsContainer skillsIcons={skillsIcons}/>
        </div>
    )
}

const DemoVideo = ({ vidSrc }) => {
    return (
        <iframe 
            width="300" 
            height="169" 
            src={vidSrc} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true" />
    )
}

const ProjDescription = ({description}) => {
    return (
        <p className="text-[#c1c9d9] text-[12pt] px-1 mt-5">
            {description}
        </p>
    )
}

const SkillsContainer = ({ skillsIcons }) => {
    return(
        <div className='mt-4 px-1 w-[100%] flex flex-row'>
            {skillsIcons.map((skill) => {
                return skill;
            })}
        </div>
    )
}

const SkillWithName = ({ icon, skillName }) => {
    return (
        <div className='group w-[45px] h-[30px]'>
            {icon}

            <div className='skills-tooltip -ml-3 max-w-max group-hover:scale-100'>{skillName}</div>
        </div>
    )
}

export default Projects;