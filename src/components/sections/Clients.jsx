import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { clientsData } from "../../data/portfolioData";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export function Clients() {
    return (
        <section id="clients" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Our Clients
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Trusted by leading brands across industries
                    </p>
                </motion.div>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
                    {clientsData.logos.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                            className={`bg-gradient-to-br ${client.bg} p-6 rounded-xl shadow-lg flex items-center justify-center h-24 cursor-pointer`}
                        >
                            <span className="text-white font-bold text-lg">{client.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative px-12"
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {clientsData.testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-800">
                                            <CardContent className="flex flex-col p-10">
                                                <Quote className="w-12 h-12 text-purple-500 mb-6" />
                                                <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                                                    "{testimonial.quote}"
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                                                    />
                                                    <div>
                                                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                                                        <p className="text-gray-400">{testimonial.position}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-slate-800 text-white border-slate-700 hover:bg-purple-600" />
                        <CarouselNext className="bg-slate-800 text-white border-slate-700 hover:bg-purple-600" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}