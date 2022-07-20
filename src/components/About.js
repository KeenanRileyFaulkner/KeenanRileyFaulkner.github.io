import aboutPic from '../images/About Pic.JPG';

const About = () => {
    return (
        <div className="text-[#c1c9d9] pt-[100px] overflow-x-hidden">
            <section className="p-10 pl-12 mt-[20px] w-screen flex flex-row flex-wrap justify-center 2xl:pt-[65px]">
                <div className='min-w-[300px] max-w-[1000px] flex flex-col justify-center'>
                    <h2 className="text-[#c1c9d9] font-medium text-[18pt]">About Me</h2>
                    <p className="text-[#c1c9d9] text-[12pt] mt-[20px] xl:pr-[100px] pb-[60px]">
                        I began learning how to write code in 2018. 
                        Since then I've served a mission for The Church of Jesus Christ of Latter-Day Saints, for two years, 
                        in both Sydney Australia and Las Vegas Nevada, and I now attend BYU in Provo, UT. I'm a computer engineering 
                        major, scheduled to graduate in the spring of 2025. I love to learn, and it's one of the things that adds to 
                        my abilities as a developer. In high school, I finished all my general education classes and graduated with 
                        an Associate's Degree. I was named the Provo High School Mathematics Sterling Scholar, graduated with a 4.0 GPA, 
                        was the salutatorian, and earned a 35/36 on the ACT.
                        <br />
                        <br />
                        I have many other hobbies outside of software development. I enjoy being active by hiking with my wife, Nikki, and 
                        playing basketball. I love listening to music, especially by the Las Vegas band The Killers, and I 
                        often make covers of other artist's songs at home with my piano. In fact, my first major web-programming 
                        project was focused on my love of The Killers and my own ability to make music.
                        <br/>
                        <br/>
                        I want to be the best programmer I can. Although I believe that a good work-life balance is important, 
                        I often get caught up for hours working on projects, researching technology, and watching videos about development in 
                        my free time. I believe in going above and beyond. For example, with my Killers Project, which was a capstone for a 
                        DevMountain bootcamp I was involved in, I taught myself React, React Router, and TailwindCSS. 
                        I put in well over 150 hours of my own free time on that project over the course of five weeks, 
                        even though the capstone requirements expected only html/vanilla JS & CSS, and 3 working features.
                    </p>
                </div>
                <div className='xl:border-l-[1px] xl:border-t-0 border-t-[1px] sm:px-[60px] pborder-[#808691] xl:pl-[100px]' >
                    <img 
                        src={aboutPic}
                        className="2xl:h-[650px] px-0 min-h-[400px] max-h-[650px] pt-[60px] xl:pb-[60px]"
                        alt="Me and my wife"
                    />
                </div>
            </section>
        </div>
    )
}

export default About;