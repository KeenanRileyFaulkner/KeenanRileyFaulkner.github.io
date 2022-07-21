import { AiOutlineMail as EmailIcon, AiOutlineGithub as GithubIcon, AiOutlineLinkedin as LinkedinIcon } from 'react-icons/ai'

const Footer = () => {
    return (
        <section className='footer-container'>
            <h1 className='footer-name-header'>Keenan R. Faulkner</h1>
            <div className='footer-desktop-links'>
                <span className='px-6 w-auto text-center'>GitHub:{" "}
                    <a className='font-semibold hover:underline hover:text-white' href='https://github.com/KeenanRileyFaulkner' rel='noreferrer noopener' target='_blank'>
                        github.com/KeenanRileyFaulkner
                    </a>
                </span>
                <span className='px-6 w-auto text-center'>LinkedIn:{" "}
                    <a className='font-semibold hover:underline hover:text-white' href='https://linkedin.com/in/keenan-faulkner' rel='noreferrer noopener' target='_blank'>
                        linkedin.com/in/keenan-faulkner
                    </a>
                </span>
                <span className='px-6 w-auto text-center'>Email:{" "}
                    <a className='font-semibold hover:underline hover:text-white' href='mailto:keenan.r.faulkner@gmail.com'>
                        keenan.r.faulkner@gmail.com
                    </a>
                </span>
            </div>
            <div className='footer-icons'>
                <FooterLinkIcon icon={<GithubIcon size='35' />} href='https://github.com/KeenanRileyFaulkner' ml={false} />
                <FooterLinkIcon icon={<LinkedinIcon size='35'/>} href='https://linkedin.com/in/keenan-faulkner' />
                <FooterEmailIcon />
            </div>
        </section>
    )
}

const FooterLinkIcon = ({ icon, href, ml=true }) => {
    let marginLeft;
    if(ml) {
        marginLeft = 'ml-2';
    } else {
        marginLeft = '';
    }
    return (
        <a href={href} rel='noreferrer noopener' target='_blank' className={`hover:text-white ${marginLeft} mr-2`}>
            {icon}
        </a>
    )
}

const FooterEmailIcon = () => {
    return (
        <a href='mailto:keenan.r.faulkner@gmail.com' className='mx-2 hover:text-white pb-2'>
            <EmailIcon size='35' />
        </a>
    )
}

export default Footer