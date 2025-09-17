import About from './components/about/About';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import SideNav from './components/navbar/SideNav';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Cover/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
