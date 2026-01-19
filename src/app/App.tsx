import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Services />
      <Clients />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
