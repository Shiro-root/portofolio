/**
 * @copyright 2024 Dewangga Tirta Kencana
 * @license Apache-2.0
 */

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Sertificat from "./components/Sertificat";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Sertificat />
      </main>
    </>
  );
};

export default App;
