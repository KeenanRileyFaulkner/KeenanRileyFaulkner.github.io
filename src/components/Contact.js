import emailjs from '@emailjs/browser';
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
        <div className="pt-[100px] pb-10 flex flex-col justify-center items-center overflow-auto">
            <form className="email-form" onSubmit={handleSubmit}>
                <h2 className="email-form-element text-[18pt] text-[#c1c9d9] pl-0 mt-3">Email Me</h2>
                <input placeholder="Name" className="email-form-element mt-3" name="submitter_name" />
                <input placeholder="Phone Number" className="email-form-element" name="phone" />
                <input placeholder="Email" className="email-form-element" name="email" />
                <input placeholder="Subject" className="email-form-element" name="Subject" />
                <textarea placeholder="Message" className="email-form-element pt-4 h-[150px]" name="message" />
                <button className="email-submit-btn" type="submit">Submit</button>
            </form>
            <section className='min-w-[300px] flex flex-col justify-center items-center mt-16 text-[#c1c9d9]'>
                <h1 className='w-[100%] ml-8 px-6 md:text-center md:mr-8 font-bold'>Keenan R. Faulkner</h1>
                <div className='mt-2 flex flex-wrap px-4'>
                    <span className='ml-6 pr-4'>Email:{" "}<span className='font-semibold'>keenan.r.faulkner@gmail.com</span></span>
                    <span className='ml-6 pr-4'>GitHub:{" "}<span className='font-semibold'>https://github.com/KeenanRileyFaulkner</span></span>
                    <span className='ml-6 pr-4'>LinkedIn:{" "}<span className='font-semibold'>www.linkedin.com/in/keenan-faulkner</span></span>
                </div>
            </section>
        </div>
    )
}

export default Contact;