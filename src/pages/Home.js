import Projects from "../components/projects/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";
import ContactSection from "../components/contact/ContactSection";
import About from "../components/about/About";
import Cover from "../components/cover/Cover";

const Home = () => {
  return (
    <>
      <Cover />
      <About />
      <SkillsSection />
      <Projects />
      <ContactSection />
    </>
  );
};
export default Home;
