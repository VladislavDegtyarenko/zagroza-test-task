import Hero from "./sections/1-Hero";
import About from "./sections/2-About";
import Call from "./sections/3-Call";
import Contact from "./sections/4-Contact";

import Header from "./sections/Header";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Call />
      <Contact />
      <Footer />
    </>
  );
}
