import {RiStackFill as SkillsIcon, RiContactsBook2Fill as ContactIcon} from 'react-icons/ri'
import {BsGrid as ProjectIcon} from 'react-icons/bs'

const Header = ({ updatePageArr, currPage }) => {
    const handleNameClick = () => {
        if(currPage.about === false) {
            const cb = updatePageArr[0];
            cb();
        }
    }

    const handleSkillsIconClick = () => {
        if(currPage.skills === false) {
            const cb = updatePageArr[1];
            cb();
        }
    }

    const handleProjectIconClick = () => {
        if(currPage.projects === false) {
            const cb = updatePageArr[2];
            cb();
        }
    }

    const handleContactIconClick = () => {
        if(currPage.contact === false) {
            const cb = updatePageArr[3];
            cb();
        }
    }

    return (
        <div className="w-screen h-[100px] border-b-[1px] border-[#808691] fixed flex items-center">
            <h1 className="font-semibold text-[#c1c9d9] text-[24pt] pl-8 mr-auto hover:text-white hover:cursor-pointer" onClick={handleNameClick}>
                Keenan Faulkner
            </h1>
            <SkillsIcon className='icon' onClick={handleSkillsIconClick}/>
            <ProjectIcon className='icon' onClick={handleProjectIconClick} />
            <ContactIcon className='icon' onClick={handleContactIconClick} />
            <a href='https://github.com/KeenanRileyFaulkner' target='_blank'>
                <div className='profile-icon'/>
            </a>
        </div>
    )
}

export default Header;