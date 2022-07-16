import aboutPic from '../images/About Pic.JPG';

const About = () => {
    return (
        <div className="text-[#c1c9d9] min-h-screen pt-[100px]">
            <section class="p-10 pl-12 mt-[50px]">
                <div class="grid grid-cols-[2fr_1fr]">
                    <div className='mt-[70px]'>
                        <h2 class="text-[#c1c9d9] font-medium text-[18pt] col-end-2 row-start-2">About Me</h2>
                        <p class="text-[#c1c9d9] text-[12pt] mb-auto mt-[20px] pr-[100px] col-end-2 row-start-2">
                            I began learning how to write code in 2018. 
                            Since then I've served a mission for The Church of Jesus Christ of Latter-Day Saints in both Sydney Australia 
                            and Las Vegas Nevada, and I now attend BYU in Provo, UT. I'm a computer engineering major, scheduled to graduate 
                            in the spring of 2025. I love to learn, and it's one of the things that adds to my abilities as a developer. 
                            In high school, I finished all my general education classes and graduated with an Associate's Degree. 
                            I was named the Provo High School Mathematics Sterling Scholar, graduated with a 4.0 GPA, and earned a 35/36 on the ACT.
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
                    <div className='border-l-[1px] border-[#808691] col-start-2'>
                        <img 
                            src={aboutPic}
                            className="h-[650px] my-auto ml-[120px] rounded-[10%]"
                            alt="Me and my wife"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;