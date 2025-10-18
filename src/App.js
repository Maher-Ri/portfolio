import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/navbar/SideNav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);

  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />
      <SideNav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
