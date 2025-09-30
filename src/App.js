import About from './components/about/About';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import SideNav from './components/navbar/SideNav';
import Projects from './components/projects/Projects';
import SkillsSection from './components/skills/SkillsSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Cover/>
      <About/>
      <Projects/>
      <SkillsSection/>
    </div>
  );
}

export default App;
