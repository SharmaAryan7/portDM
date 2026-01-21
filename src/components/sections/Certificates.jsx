import { useState } from "react";
import { motion } from "motion/react";
import { Maximize2 } from "lucide-react"; // Import icon for visual cue
import { certificatesData } from "../../data/portfolioData";
import { Card, CardContent } from "../ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../ui/dialog";

export function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section
            id="certificates"
            className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Certificates & Recognition
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Certified experts with proven expertise across major platforms
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certificatesData.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                                onClick={() => setSelectedCert(cert)} // Open modal on click
                            >
                                <Card className="h-full border-slate-800 bg-slate-900/50 overflow-hidden relative border hover:border-purple-500/50 cursor-pointer transition-all hover:scale-105">
                                    {/* Background gradient on hover */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    />
                                    <CardContent className="p-8 relative z-10 flex flex-col items-center text-center h-full">

                                        {/* View Icon Hint */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Maximize2 className="w-5 h-5 text-gray-400" />
                                        </div>

                                        <motion.div
                                            className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                                        <p className="text-gray-500 text-sm mb-4">{cert.year}</p>

                                        <p className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                            Click to view certificate
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Certificate Viewer Modal */}
            <Dialog
                open={!!selectedCert}
                onOpenChange={(open) => !open && setSelectedCert(null)}
            >
                <DialogContent className="max-w-4xl bg-slate-950 border-slate-800 p-0 overflow-hidden">
                    <DialogHeader className="p-4 bg-slate-900 border-b border-slate-800">
                        <DialogTitle className="text-white flex items-center gap-2">
                            {selectedCert?.title}
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Issued by {selectedCert?.issuer} • {selectedCert?.year}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="p-4 flex items-center justify-center bg-black/50">
                        {selectedCert && (
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-h-[70vh] w-auto object-contain rounded-md shadow-2xl"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}