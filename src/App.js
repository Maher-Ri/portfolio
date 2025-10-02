import About from './components/about/About';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import SideNav from './components/navbar/SideNav';
import Projects from './components/projects/Projects';
import SkillsSection from './components/skills/SkillsSection';
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Cover/>
      <About/>
      <SkillsSection/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
