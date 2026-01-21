import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navbarData } from "../../data/portfolioData";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const LogoIcon = navbarData.logo.icon;

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4"
                        : "bg-transparent py-6"
                )}
            >
                {/* Main Container with Relative Positioning for centering */}
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

                    {/* 1. Left: Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "#home")}
                        className="flex items-center gap-2 font-bold text-xl text-white group z-10"
                    >
                        <div className="bg-gradient-to-tr from-purple-600 to-pink-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                            <LogoIcon className="w-5 h-5 text-white" />
                        </div>
                        <span>{navbarData.logo.text}</span>
                    </a>

                    {/* 2. Center: Desktop Menu Links */}
                    {/* Absolute positioning ensures it is dead-center relative to the container */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {navbarData.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* 3. Right: CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4 z-10">

                        {/* Mobile Menu Toggle Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-slate-800"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {/* Background Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sliding Menu Panel */}
            <div
                className={cn(
                    "fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-slate-950 border-l border-slate-800 z-50 p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2 font-bold text-xl text-white">
                            <LogoIcon className="w-5 h-5 text-purple-500" />
                            <span>Menu</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col gap-6">
                        {navbarData.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}