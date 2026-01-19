import Navbar from "./components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Contact from "./pages/contact";
import RootLayout from "./layout";
import GridBackground from "./components/gridBackground";
import Experience from "./pages/experience";

export default function App() {
  return (
    <>
      <div className="relative pl-[110px] min-h-screen bg-[#FFF8E7] dark:bg-[#212435] transition-all snap-y snap-mandatory ">
        <RootLayout>
          <GridBackground />
          <Navbar />
          <main>
            <section className="snap-start">
              <Home />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </section>
          </main>
        </RootLayout>
      </div>
    </>
  );
}
