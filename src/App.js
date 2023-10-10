import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/services";

function App() {
  return (
    <main className="max-w-[2080px] lg:m-auto text-center bg-[#F7F7F7]">
      <Nav />
      <Hero />
      <About />
      <Services />
      <h2 className="text-[48px] font-bold text-blue mb-14">اتصل بنا</h2>
      <Contact />
    </main>
  );
}

export default App;
