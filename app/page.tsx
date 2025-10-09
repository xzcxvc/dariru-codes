import Navbar from "./components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Contact from "./pages/contact";
import RootLayout from "./layout";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 snap-y snap-mandatory ">
      <RootLayout>
        <Navbar />
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
      </RootLayout>
    </div>
  );
}
