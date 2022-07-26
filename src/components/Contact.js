import emailjs from '@emailjs/browser';
import useDocumentTitle from '../hooks/useDocumentTitle';
const {REACT_APP_PUBLIC_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID} = process.env


const Contact = () => {
    useDocumentTitle('Contact -- Keenan Faulkner');

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
                alert('Message sent! I will get back to you shortly.', result.text);
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
            {/* <Footer /> */}
        </div>
    )
}

export default Contact;