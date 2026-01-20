import { motion } from "motion/react";
import { valuesData } from "../../data/portfolioData";
import { Card, CardContent } from "../ui/card";

export function About() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        About Us
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We're a passionate team of digital marketing experts dedicated to
                        helping businesses thrive in the digital age. With years of
                        experience and a proven track record, we combine creativity with
                        data-driven strategies to deliver exceptional results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {valuesData.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Card className="h-full border-slate-800 bg-slate-900/50 hover:shadow-purple-500/20">
                                    <CardContent className="p-8">
                                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}