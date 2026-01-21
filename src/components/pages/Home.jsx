import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Clients } from "../sections/Clients";
import { Certificates } from "../sections/Certificates";
import { Contact } from "../sections/Contact";
import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Clients />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
}