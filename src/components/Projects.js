import { 
    BiInjection as InjectionIcon, 
    BiCodeCurly as MustacheIcon 
} from "react-icons/bi";
import { BsAmd as AmdIcon } from "react-icons/bs";
import { FaDatabase as DataIcon, FaRoute as RoutingIcon } from "react-icons/fa";
import { GiMeshNetwork as GNNIcon } from "react-icons/gi";
import { IoHardwareChip as RTLDesignIcon } from "react-icons/io5";
import { 
    MdDataThresholding as AnalysisIcon,
    MdOutlineScreenshotMonitor as GUIIcon,
} from "react-icons/md";
import {
    SiPostgresql as PostgresIcon, 
    SiNodedotjs as NodeIcon, 
    SiExpress as ExpressIcon,
    SiReact as ReactIcon,
    SiTailwindcss as TailwindIcon,
    SiPython as PythonIcon,
    SiReactrouter as ReactRouterIcon,
    SiCplusplus as CPPIcon,
    SiGithub as GithubIcon,
    SiGnubash as BashIcon,
    SiGit as GitIcon,
    SiLinux as LinuxIcon,
} from 'react-icons/si';
import { TiFlowParallel as ParallelIcon } from "react-icons/ti";
import ChipPic from "../images/chip.jpg";
import FCPic from "../images/FC.png";
import GnnPic from "../images/gnn.jpg";
import XnorNeonPic from "../images/logicGates.jpg";
import useDocumentTitle from '../hooks/useDocumentTitle';

const Projects = () => {
    useDocumentTitle('Projects -- Keenan Faulkner');
    return (
        <div className="mt-[100px] pt-[20px] w-[75%] flex justify-center items-center min-h-[710px] flex-wrap self-center">
            <ProjectCard 
                projTitle='Full-Chip Layout'
                projLink=''
                vidSrc=''
                description = 
                    {'I completed an internship for the FCL team at Intel Corporation. Among more than 50 interns, I was one of only two selected to work on this team, due to strong programming skills. I worked on routing analog signals, and validating boundary pin placements using Synopsys Fusion Compiler.'}
                skillsIcons = {[
                    <SkillWithName 
                        icon={<RoutingIcon size="30" className="hover:text-[#cfbc7e] text-gray-400 mr-4" />} 
                        skillName='Analog Routing (Synopsys Fusion Compiler)'
                    />,
                    <SkillWithName 
                        icon={<RTLDesignIcon size="30" className="hover:text-[#6ddd83] text-gray-400 mr-4" />} 
                        skillName='Physical Chip Design'
                    />,
                    <SkillWithName
                        icon={<BashIcon size="30" className='hover:text-[#ff9900] text-gray-400 mr-4' />}
                        skillName='Scripting'
                    />,
                    <SkillWithName
                        icon={<LinuxIcon size="30" className='hover:text-[#ffbf00] text-gray-400 mr-4' />}
                        skillName='Linux/Unix'
                    />,
                ]}
                imgSrc={ FCPic }
                altTxt={"Synopsys Fusion Compiler"}
            />
            <ProjectCard 
                projTitle='Microbump Design GUI'
                projLink=''
                vidSrc=''
                description = 
                    {'At Intel Corporation I lead development on a C++ GUI application widely used by Intel\'s Design Team to create floorplans and microbump layouts for advanced 3D chip designs. I personally added dozens of new Tcl commands to the built-in interpreter, made bug fixes and other enhancements, and integrated the program with GitHub for easier team-based development.'}
                skillsIcons = {[
                    <SkillWithName 
                        icon={<CPPIcon size="30" className="hover:text-[#3c64a7] text-gray-400 mr-4" />} 
                        skillName='C++'
                    />,
                    <SkillWithName 
                        icon={<GithubIcon size="30" className="hover:text-[#ffffff] text-gray-400 mr-4" />} 
                        skillName='Github'
                    />,
                    <SkillWithName
                        icon={<BashIcon size="30" className='hover:text-[#76da70] text-gray-400 mr-4' />}
                        skillName='Scripting'
                    />,
                    <SkillWithName
                        icon={<GitIcon size="30" className='hover:text-[#fb6f56] text-gray-400 mr-4' />}
                        skillName='Git'
                    />,
                    <SkillWithName
                        icon={<GUIIcon size="30" className='hover:text-[#56f8fb] text-gray-400 mr-4' />}
                        skillName='FLTK GUI Development'
                    />,
                ]}
                imgSrc={ ChipPic }
                altTxt={"3D Microprocessor"}
            />
            <ProjectCard 
                projTitle='FPGA Assurance'
                projLink='https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=8054&context=facpub'
                vidSrc=''
                description = 
                    {'I co-authored a paper on validating FPGA bitstreams through structural comparison of a synthesized netlist to a bitstream-reversed netlist. My contributions included writing the fault-injection tests for the project and parallelizing our build system for comparison and validation. Click the title to read.'}
                skillsIcons = {[
                    <SkillWithName 
                        icon={<PythonIcon size="30" className="hover:text-[#ff00ff] text-gray-400 mr-4" />} 
                        skillName='Python'
                    />,
                    <SkillWithName 
                        icon={<InjectionIcon size="30" className="hover:text-[#c5021a] text-gray-400 mr-4" />} 
                        skillName='Fault Injection Testing'
                    />,
                    <SkillWithName
                        icon={<MustacheIcon size="30" className='hover:text-[#ff9900] text-gray-400 mr-4' />}
                        skillName='Mustache Templating Engine'
                    />,
                    <SkillWithName
                        icon={<AmdIcon size="30" className='hover:text-[#ffffff] text-gray-400 mr-4' />}
                        skillName='AMD FPGA tools'
                    />,
                    <SkillWithName
                        icon={<ParallelIcon size="30" className='hover:text-[#ffee00] text-gray-400 mr-4' />}
                        skillName='Parallel Programming'
                    />,
                ]}
                imgSrc={ XnorNeonPic }
                altTxt={"Neon Green XNOR Gate"}
            />
            <ProjectCard 
                projTitle='GNN Circuit Analysis'
                projLink='https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=1420&context=studentpub'
                vidSrc=''
                description = 
                    {'I co-authored a paper on fuzzy sub-graph isomorphism approach to circuit analysis. This led to further research using Graph Neural Networks on the subject. I was in charge of writing a library to generate training data for our GNN models, and for quantifying performance using Precision, Recall, and F1 Scores. Click the title to read.'}
                skillsIcons = {[
                    <SkillWithName 
                        icon={<GNNIcon size="30" className="hover:text-[#4575ff] text-gray-400 mr-4" />}  
                        skillName='GNNs'
                    />,
                    <SkillWithName 
                        icon={<AnalysisIcon size="30" className="hover:text-[#02c522] text-gray-400 mr-4" />} 
                        skillName='AI Analysis'
                    />,
                    <SkillWithName
                        icon={<DataIcon size="30" className='hover:text-[#ff0000] text-gray-400 mr-4' />}
                        skillName='Data Generation'
                    />,
                    <SkillWithName
                        icon={<AmdIcon size="30" className='hover:text-[#ffffff] text-gray-400 mr-4' />}
                        skillName='AMD FPGA tools'
                    />,
                ]}
                imgSrc={ GnnPic }
                altTxt={"Graph Neural Networks"}
            />
            <ProjectCard 
                projTitle='The Killers Music Player'
                projLink='http://thekillersmusic.herokuapp.com'
                vidSrc='https://www.youtube.com/embed/R2AtS6j5exM'
                description = 
                    {'I created this web app as my Capstone Project for DevMountain. It is a fan page for the Las Vegas band "The Killers" that allows me to feature information about the band, their music, and host my own covers of their music. It\'s my first fully self-contained project; no additional coding is required to maintain the site. I made an admin portal to make enhancing the website a self-sustaining process.'}
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

const ProjectCard = ({ projTitle, projLink, vidSrc, description, skillsIcons, imgSrc, altTxt }) => {
    const graphic = imgSrc && altTxt ? <PhotoFrame photoSrc={imgSrc} altTxt={altTxt} /> : <DemoVideo vidSrc={vidSrc} />
    const header = projLink === '' ? 
        (<h1 className="text-[#c1c9d9] hover:cursor-default font-bold text-[20pt] text-center">
            {projTitle}
        </h1>)
        :
        (<a href={projLink} target="_blank" rel="noopener noreferrer">
            <h1 className="text-[#c1c9d9] hover:text-white hover:cursor-pointer font-bold text-[20pt] text-center">
                {projTitle}
            </h1>
        </a>);
    return (
        <div className="h-[600px] w-[330px] mx-[15px] my-[15px] px-[10px] py-5 border-[1px] border-white rounded-lg flex items-center flex-col">
            {header}
            <hr className="w-[95%] h-[1px] text-white my-5" />
            {graphic}
            <ProjDescription description={description}/>
            <SkillsContainer skillsIcons={skillsIcons}/>
        </div>
    )
}

const PhotoFrame = ({ photoSrc, altTxt }) => {
    return (
        <img
            width="300" 
            height="169" 
            src={photoSrc}
            alt={altTxt} />
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
        <div className='mt-auto px-1 w-[100%] flex flex-row self-end'>
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