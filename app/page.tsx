import Navbar from "./components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Contact from "./pages/contact";
import RootLayout from "./layout";

export default function App() {
  return (
    <>
      <div className="absolute">a</div>
      <div className="pl-[110px] min-h-screen bg-[#FCEED1] dark:bg-[#212435] transition-colors duration-300 snap-y snap-mandatory ">
        <RootLayout>
          <Navbar />
          <main>
            <section className="snap-start">
              <Home />
            </section>
            <section className="snap-start">
              <Projects />
            </section>
            <section className="snap-start">
              <About />
            </section>
            <section className="snap-start">
              <Contact />
            </section>
          </main>
        </RootLayout>
      </div>
    </>
  );
}
