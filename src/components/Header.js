import {RiContactsBook2Fill as ContactIcon} from 'react-icons/ri'
import {BsGrid as ProjectIcon} from 'react-icons/bs'
import {FaHammer as SkillsIcon} from 'react-icons/fa'

const Header = () => {
    return (
        <div className="w-screen h-[100px] border-b-[1px] border-[#808691] fixed flex items-center">
            <h1 className="font-semibold text-[#c1c9d9] text-[24pt] pl-8 mr-auto">Keenan Faulkner</h1>
            <SkillsIcon className='text-[24pt] text-[#c1c9d9] hover:text-white hover:cursor-pointer mx-4' />
            <ProjectIcon className='text-[24pt] text-[#c1c9d9] hover:text-white hover:cursor-pointer mx-4' />
            <ContactIcon className='text-[24pt] text-[#c1c9d9] hover:text-white hover:cursor-pointer mx-4' />
            <div className='h-[50px] w-[50px] bg-profilePic bg-cover rounded-3xl ml-4 mr-8 border-[2px] border-[#c1c9d9] hover:border-white hover:cursor-pointer'/>
        </div>
    )
}

export default Header;