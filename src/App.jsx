import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Clients } from "./components/sections/Clients";
import { Certificates } from "./components/sections/Certificates";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/sections/Navbar";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Clients />
            <Certificates />
            <Contact />
            <Footer />
            <Toaster position="top-center" />
        </div>
    );
}