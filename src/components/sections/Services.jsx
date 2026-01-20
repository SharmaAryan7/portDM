import { motion } from "motion/react";
import { servicesData } from "../../data/portfolioData";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";

export function Services() {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        What We Do
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive digital marketing solutions tailored to your unique business needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full border-slate-800 bg-slate-900/50 hover:bg-slate-900">
                                    <CardHeader>
                                        <motion.div
                                            className={`bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <CardTitle className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-400 leading-relaxed text-base">
                                            {service.description}
                                        </CardDescription>
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