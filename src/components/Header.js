import {RiStackFill as SkillsIcon, RiContactsBook2Fill as ContactIcon, RiMenuFill as HamburgerMenuIcon} from 'react-icons/ri'
import {BsGrid as ProjectIcon} from 'react-icons/bs'
import { IoClose as CloseIcon } from 'react-icons/io5'
import { useState } from 'react'

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
        <div className="w-screen h-[100px] border-b-[1px] border-[#808691] fixed flex flex-row items-center bg-[#0d1117]">
            <NameTooltip  name={<h1 onClick={handleNameClick}>Keenan Faulkner</h1>} text={'About Page'} />

            <div className='flex flex-row items-center ml-auto right-side-nav-icons'>
                <IconTooltip icon={<SkillsIcon onClick={handleSkillsIconClick} />} text="Skills" />
                <IconTooltip icon={<ProjectIcon onClick={handleProjectIconClick} />} text="Projects" />
                <IconTooltip icon={<ContactIcon onClick={handleContactIconClick} />} text="Contact" />
                
                <IconTooltip 
                    icon={ 
                        <a href='https://github.com/KeenanRileyFaulkner' target='_blank' rel='noreferrer'>
                            <div className='profile-icon'/>
                        </a>
                    }
                    text="Github Profile"
                />
            </div>
            <HamburgerMenu />
        </div>
    )
}

const NameTooltip = ({ name, text }) => {
    return(
        <div className='nav-icon group'>
            {name}

            <span className='nav-name-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

const IconTooltip = ({ icon, text }) => {
    return(
        <div className='nav-icon group'>
            {icon}

            <span className='nav-icon-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

const HamburgerMenuToolTip = ({ icon, text, expanded }) => {
    let expandedClass;
    expanded ? expandedClass='nav-menu-close-tooltip' : expandedClass = 'nav-menu-open-tooltip';

    return(
        <div className='nav-icon group'>
            {icon}

            <span className={`${expandedClass} group-hover:scale-100`}>
                {text}
            </span>
        </div>
    );
}

const HamburgerMenu = () => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
        console.log(expanded);
    }

    let icon;
    let description;
    if (expanded) {
        icon = <CloseIcon onClick={toggleExpanded} />;
        description = 'Close Menu';
    } else {
        icon = <HamburgerMenuIcon onClick={toggleExpanded} />;
        description = 'Menu';
        
    }

    return (
        <div className='menu-toggle-btn'>
            <HamburgerMenuToolTip icon={icon} text={description} expanded={expanded} />
        </div>
    )
}

export default Header;