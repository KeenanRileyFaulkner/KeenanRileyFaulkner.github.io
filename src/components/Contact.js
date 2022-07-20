import { AiOutlineMail as EmailIcon, AiOutlineGithub as GithubIcon, AiOutlineLinkedin as LinkedinIcon } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const {REACT_APP_PUBLIC_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID} = process.env


const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        let validInputs = true;
        document.querySelectorAll('input').forEach(input => {
            if(input.value === '') {
                validInputs = false;
                alert(`You must include a valid ${input.name} in your submission`);
            }
        });

        if(document.querySelector('textarea').value === '') {
            validInputs = false;
            alert('You must include a valid message in your submission.');
        }

        if(validInputs) {
            emailjs
            .sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_PUBLIC_KEY)
            .then((result) => {
                alert('Message sent! I will get back to you shortly', result.text);
                document.querySelectorAll('input').forEach((input) => input.value = '');
            },
                (error) => {
                    alert('An error occurred. Please try again.', error.text);
            });
        }
    }

    return (
        <div className="contact-container">
            <form className="email-form" onSubmit={handleSubmit}>
                <h2 className="emailme-header">Email Me</h2>
                <input placeholder="Name" className="email-form-element mt-3" name="submitter_name" />
                <input placeholder="Phone Number" className="email-form-element" name="phone" />
                <input placeholder="Email" className="email-form-element" name="email" />
                <input placeholder="Subject" className="email-form-element" name="subject" />
                <textarea placeholder="Message" className="email-form-element pt-4 h-[150px]" name="message" />
                <button className="email-submit-btn" type="submit">Submit</button>
            </form>
            <Footer />
        </div>
    )
}

const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='footer-icons'>
                <FooterIconWithTooltip icon={<EmailIcon />} hovertext='keenan.r.faulkner@gmail.com' />
                <FooterIconWithTooltip icon={<GithubIcon />} hovertext='https://github.com/KeenanRileyFaulkner' />
                <FooterIconWithTooltip icon={<LinkedinIcon />} hovertext='www.linkedin.com/in/keenan-faulkner' />
            </div>
            <h1 className='footer-name-header'>Keenan R. Faulkner</h1>
            <div className='footer-desktop-links'>
                <span className='px-6 w-auto text-center'>GitHub:{" "}<span className='font-semibold'>https://github.com/KeenanRileyFaulkner</span></span>
                <span className='px-6 w-auto text-center'>LinkedIn:{" "}<span className='font-semibold'>www.linkedin.com/in/keenan-faulkner</span></span>
                <span className='px-6 w-auto text-center'>Email:{" "}<span className='font-semibold'>keenan.r.faulkner@gmail.com</span></span>
            </div>
        </section>
    )
}

const FooterIconWithTooltip = ({ icon, hovertext, clicktext='Copied to Clipboard!' }) => {
    const [styles, setStyles] = useState('hover-styles');
    const [text, setText] = useState(`${hovertext}`);

    const handleClick = () => {
        navigator.clipboard.writeText(text);

        setText(`${clicktext}`);
        setStyles('click-styles');

        setTimeout(() => {
            setText(`${hovertext}`);
            setStyles('hover-styles');
        }, 3000);
    }
    
    return (
        <div onClick={handleClick} className='px-6 nav-icon w-[40px] m-0 group'>
            {icon}

            <span className={`${styles} group-hover:scale-100`}>
                {text}
            </span>
        </div>
    )
}

export default Contact;