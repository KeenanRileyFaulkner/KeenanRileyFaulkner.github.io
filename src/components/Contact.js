import emailjs from '@emailjs/browser';
const {REACT_APP_PUBLIC_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID} = process.env

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_PUBLIC_KEY)
            .then((result) => {
                alert('Message sent! I will get back to you shortly', result.text);
            },
                (error) => {
                    alert('An error occurred. Please try again.', error.text);
            });
    }

    return (
        <div className="pt-[100px] pb-10 flex justify-center items-center overflow-auto">
            <form className="email-form" onSubmit={handleSubmit}>
                <h2 className="email-form-element text-[18pt] text-[#c1c9d9] pl-0 mt-3">Email Me</h2>
                <input placeholder="Subject" className="email-form-element mt-3" name="Subject" />
                <input placeholder="Name" className="email-form-element" name="submitter_name" />
                <input placeholder="Phone Number" className="email-form-element" name="phone" />
                <input placeholder="Email" className="email-form-element" name="email" />
                <textarea placeholder="Message" className="email-form-element pt-4 h-[150px]" name="message" />
                <button className="email-submit-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;