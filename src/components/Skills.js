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
    SiReactrouter as ReactRouterIcon,
    SiGit as GitIcon
} from 'react-icons/si';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Skills = () => {
    useDocumentTitle('Skills -- Keenan Faulkner')
    return (
        <div className="skills-container">
            <div className="skills-wrapper">
                <SkillIcon icon={<HTMLIcon size='80' className='text-[#d74b24] group-hover:text-[#ff6034]' />} tooltip='HTML'/>
                <SkillIcon icon={<CSSIcon size='80' className='text-[#2091eb] group-hover:text-[#4eafff]' />} tooltip='CSS'/>
                <SkillIcon icon={<JSIcon size='80' className='text-[#e4d04b] group-hover:text-[#ebff39]' />} tooltip='JavaScript'/>
                <SkillIcon icon={<NodeIcon size='80' className='text-[#5aa844] group-hover:text-[#7ce65f]' />} tooltip='NodeJS'/>
                <SkillIcon icon={<ExpressIcon size='80' className='text-[#808691] group-hover:text-white' />} tooltip='ExpressJS'/>
                <SkillIcon icon={<PostgresIcon size='80' className='text-[#30628a] group-hover:text-[#458ac2]' />} tooltip='SQL/Postgres'/>
                <SkillIcon icon={<ReactIcon size='80' className='text-[#4fb7d3] group-hover:text-[#83e4ff]' />} tooltip='ReactJS'/>
                <SkillIcon icon={<ReactRouterIcon size='80' className='text-[#c5021a] group-hover:text-[#e42138]' />} tooltip='React Router'/>
                <SkillIcon icon={<TailwindIcon size='80' className='text-[#07adca] group-hover:text-[#53ccff]' />} tooltip='Tailwind CSS'/>
                <SkillIcon icon={<CppIcon size='80' className='text-[#233f70] group-hover:text-[#3c64a7]' />} tooltip='C++'/>
                <SkillIcon icon={<JavaIcon size='80' className='text-[#d0350d] group-hover:text-[#ff3300]' />} tooltip='Java'/>
                <SkillIcon icon={<GitIcon size='80' className='text-[#e44c30] group-hover:text-[#fb6f56]' />} tooltip='Git' />
            </div>
        </div>
    )
}

const SkillIcon = ({ icon, tooltip }) => {
    return (
        <div className='skill group'>
            {icon}

            <div className='skills-tooltip group-hover:scale-100'>{tooltip}</div>
        </div>
    )
}

export default Skills;