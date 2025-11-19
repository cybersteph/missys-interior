import Header from "./Sections/Header/Header";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Contact from "./Sections/Contact/Contact";
import "./app.css";

const App = () => {
  return (
    <div className="homepage">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
