import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroData } from "../../data/portfolioData";
import { Button } from "../ui/button";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{ top: "20%", left: "10%" }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    style={{ bottom: "20%", right: "10%" }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {heroData.title}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {heroData.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button
                            variant="gradient"
                            size="lg"
                            className="rounded-full text-lg font-semibold"
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Get In Touch
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}