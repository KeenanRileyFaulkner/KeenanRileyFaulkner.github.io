import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  //setting initial state, cbs for changing state, and sending it as prop to Header in order to conditionally render the page
  const defaultPageObj = {about: true, skills: false, projects: false, contact: false}

  const [currPage, setCurrPage] = useState(defaultPageObj);

  const navToAbout = () => {
    setCurrPage({...defaultPageObj});
  }

  const navToSkills = () => {
    setCurrPage({...defaultPageObj, about: false, skills: true});
  }

  const navToProjects = () => {
    setCurrPage({...defaultPageObj, about: false, projects: true});
  }

  const navToContact = () => {
    setCurrPage({...defaultPageObj, about: false, contact: true});
  }

  const updatePageArr = [navToAbout, navToSkills, navToProjects, navToContact];

  let display;
  if(currPage.about) {
    display = <About />
  } else if (currPage.skills) {
    display = <Skills />
  } else if (currPage.projects) {
    display = <Projects />
  } else {
    display = <Contact />
  }

  return (
    <div>
      <div className='bg-[#0d1117] background bg-cover' />
      <Header updatePageArr={updatePageArr} currPage={currPage} />
      {display}
      <Footer />
    </div>
    
  );
}

export default App;
