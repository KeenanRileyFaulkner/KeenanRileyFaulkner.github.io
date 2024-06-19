import { FaRoute as RoutingIcon } from "react-icons/fa";
import { IoHardwareChip as RTLDesignIcon } from "react-icons/io5";
import {
    SiJavascript as JSIcon, 
    SiCss3 as CSSIcon, 
    SiGnubash as BashIcon,
    SiPostgresql as PostgresIcon, 
    SiNodedotjs as NodeIcon, 
    SiExpress as ExpressIcon,
    SiReact as ReactIcon,
    SiTailwindcss as TailwindIcon,
    SiCplusplus as CppIcon,
    SiHtml5 as HTMLIcon,
    SiJava as JavaIcon,
    SiReactrouter as ReactRouterIcon,
    SiGit as GitIcon,
    SiPython as PythonIcon,
    SiSpring as SpringIcon,
    SiGithub as GithubIcon,
} from 'react-icons/si';
import { VscTerminalLinux as LinuxIcon  } from "react-icons/vsc";
import useDocumentTitle from '../hooks/useDocumentTitle';

const Skills = () => {
    useDocumentTitle('Skills -- Keenan Faulkner')
    return (
        <div className="skills-container">
            <div className="skills-wrapper">
                <SkillIcon icon={<PythonIcon size='80' className='text-[#c414c4] group-hover:text-[#ff00ff]' />} tooltip='Python'/>
                <SkillIcon icon={<CppIcon size='80' className='text-[#233f70] group-hover:text-[#3c64a7]' />} tooltip='C++'/>
                <SkillIcon icon={<GitIcon size='80' className='text-[#e44c30] group-hover:text-[#fb6f56]' />} tooltip='Git' />
                <SkillIcon icon={<GithubIcon size='80' className='text-[#b9a9a7] group-hover:text-[#ffffff]' />} tooltip='GitHub' />
                <SkillIcon icon={<LinuxIcon size='80' className='text-[#ba8d07] group-hover:text-[#ffbf00]' />} tooltip='Linux' />
                <SkillIcon icon={<BashIcon size='80' className='text-[#50b63c] group-hover:text-[#76da70]' />} tooltip='Scripting'/>
                <SkillIcon icon={<RTLDesignIcon size='80' className='text-[#3d976d] group-hover:text-[#6ddd83]' />} tooltip='RTL Design' />
                <SkillIcon icon={<RoutingIcon size='80' className='text-[#a9903d] group-hover:text-[#cfbc7e]' />} tooltip='Analog Routing (Synopsys Fusion Compiler)'/>
                <SkillIcon icon={<JavaIcon size='80' className='text-[#d0350d] group-hover:text-[#ff3300]' />} tooltip='Java'/>
                <SkillIcon icon={<ReactIcon size='80' className='text-[#4fb7d3] group-hover:text-[#83e4ff]' />} tooltip='ReactJS'/>
                <SkillIcon icon={<HTMLIcon size='80' className='text-[#d74b24] group-hover:text-[#ff6034]' />} tooltip='HTML'/>
                <SkillIcon icon={<CSSIcon size='80' className='text-[#2091eb] group-hover:text-[#4eafff]' />} tooltip='CSS'/>
                <SkillIcon icon={<JSIcon size='80' className='text-[#e4d04b] group-hover:text-[#ebff39]' />} tooltip='JavaScript'/>
                <SkillIcon icon={<NodeIcon size='80' className='text-[#5aa844] group-hover:text-[#7ce65f]' />} tooltip='NodeJS'/>
                <SkillIcon icon={<SpringIcon size='80' className='text-[#568c31] group-hover:text-[#6aad3d]' />} tooltip='Spring Framework' />
                <SkillIcon icon={<ExpressIcon size='80' className='text-[#808691] group-hover:text-white' />} tooltip='ExpressJS'/>
                <SkillIcon icon={<PostgresIcon size='80' className='text-[#30628a] group-hover:text-[#458ac2]' />} tooltip='SQL/Postgres'/>
                <SkillIcon icon={<ReactRouterIcon size='80' className='text-[#c5021a] group-hover:text-[#e42138]' />} tooltip='React Router'/>
                <SkillIcon icon={<TailwindIcon size='80' className='text-[#07adca] group-hover:text-[#53ccff]' />} tooltip='Tailwind CSS'/>
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