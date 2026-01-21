import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Clients } from "../sections/Clients";
import { Certificates } from "../sections/Certificates";
import { Contact } from "../sections/Contact";
import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                // Small timeout to ensure the DOM is fully rendered before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);
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