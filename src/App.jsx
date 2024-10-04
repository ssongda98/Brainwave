import Header from "./componant/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./componant/Hero";
import Services from "./componant/Services";
import Benefits from "./componant/Benefits";
import Collaboration from "./componant/Collaboration";
import Pricing from './componant/Pricing';
import Roadmap from './componant/Roadmap';
import Footer from "./componant/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits/>
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
