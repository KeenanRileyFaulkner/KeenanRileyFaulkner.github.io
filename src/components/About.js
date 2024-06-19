import aboutPic from '../images/About Pic.JPG';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
    useDocumentTitle('About -- Keenan Faulkner');
    return (
        <div className="text-[#c1c9d9] pt-[100px] overflow-x-hidden">
            <section className="p-10 pl-12 w-screen flex flex-row flex-wrap justify-center">
                <div className='min-w-[300px] max-w-[1000px] flex flex-col justify-center'>
                    <h2 className="text-[#c1c9d9] font-medium text-[18pt]">About Me</h2>
                    <p className="text-[#c1c9d9] text-[12pt] mt-[20px] xl:pr-[100px] pb-[60px]">
                        I'm an experienced computer engineer, ready to fill needs and elevate the performance of your team.
                        I have experience refining system architectures using parallel processing and templating, writing low-level programs
                        for embedded applications, enhancing GUI based applications in languages including Python, C++, and Java, and 
                        doing integration/physical layout work for microprocessor design.
                        <br />
                        <br />
                        I'm a trusted and proven developer. Most recently, I was selected to be part of the Full-Chip Layout team at Intel
                        Corporation due to my experience with scripting languages; the cohort had approximately 50 interns and I was one of only
                        2 selected for FCL. In other roles, I've been put in charge of large projects, such as one to rewrite my team's codebase
                        to incorporate parallel performance. Additionally, I've published academic papers on new methodologies for identifying IP
                        in unknown FPGA bitstreams, in IEEE journals.
                        <br/>
                        <br/>
                        I have many other hobbies outside of software development. I enjoy being active by hiking with my wife, Nikki, and 
                        playing basketball. I love listening to music, especially by the Las Vegas band The Killers, and I 
                        often make covers of other artist's songs in my home studio. In fact, my first major web-programming 
                        project was focused on my love of The Killers and my own ability to make music. Welcome to my site! I look forward to
                        meeting you and exploring a future together.
                    </p>
                </div>
                <div className='xl:border-l-[1px] xl:border-t-0 border-t-[1px] sm:px-[60px] pborder-[#808691] xl:pl-[100px]' >
                    <img 
                        src={aboutPic}
                        className="2xl:h-[630px] px-0 min-h-[400px] max-h-[650px] pt-[60px] xl:pb-[60px]"
                        alt="Me and my wife"
                    />
                </div>
            </section>
        </div>
    )
}

export default About;