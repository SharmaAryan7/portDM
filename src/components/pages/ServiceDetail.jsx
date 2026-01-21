import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Link is used here
import { motion } from "motion/react";
import { ArrowLeft, Eye, FileText } from "lucide-react";
import { servicesData } from "../../data/portfolioData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

export function ServiceDetail() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null);

    useEffect(() => {
        const foundService = servicesData.find((s) => s.id === id);
        setService(foundService);
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Back Button */}
                <div className="w-full flex justify-start mb-8">
                    {/* 👇 CHANGED: Links to the #services section on the home page */}
                    <Link to="/#services">
                        <Button variant="ghost" className="text-gray-400 hover:text-white pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Button>
                    </Link>
                </div>

                {/* Page Title & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center flex flex-col items-center"
                >
                    <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg shadow-purple-500/20`}>
                        <service.icon className="w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {service.title} Projects
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.projects && service.projects.length > 0 ? (
                        service.projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-slate-800 bg-slate-900/50 hover:border-purple-500/30 overflow-hidden flex flex-col group">
                                    <div className="h-56 w-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex-1 flex flex-col justify-between">
                                        <CardDescription className="text-gray-400 mb-8 text-base leading-relaxed">
                                            {project.description}
                                        </CardDescription>

                                        <Button
                                            variant="outline"
                                            className="w-full border-slate-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
                                            onClick={() => setSelectedPdf(project.pdfUrl)}
                                        >
                                            <Eye className="mr-2 h-4 w-4" /> View Case Study
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-24 text-center">
                            <div className="inline-block p-6 rounded-full bg-slate-900/50 border border-slate-800 mb-4">
                                <FileText className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No Projects Yet</h3>
                            <p className="text-gray-500">We are currently updating this category.</p>
                        </div>
                    )}
                </div>
            </div>

            <Dialog open={!!selectedPdf} onOpenChange={(open) => !open && setSelectedPdf(null)}>
                <DialogContent className="max-w-6xl h-[90vh] bg-slate-950 border-slate-800 p-0 overflow-hidden flex flex-col rounded-xl">
                    <DialogHeader className="p-4 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 flex-none">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient}`}>
                                <FileText className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <DialogTitle className="text-white text-lg">Case Study Viewer</DialogTitle>
                                <DialogDescription className="text-gray-400 text-xs">Viewing secure document</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="flex-1 bg-slate-900 w-full h-full relative">
                        {selectedPdf && (
                            <iframe
                                src={`${selectedPdf}#toolbar=0&view=FitH`}
                                className="w-full h-full"
                                title="Project PDF"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}