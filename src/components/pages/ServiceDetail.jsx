import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Eye } from "lucide-react";
import { servicesData } from "../../data/portfolioData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

export function ServiceDetail() {
    const { id } = useParams(); // Get the ID from the URL (e.g., "seo")
    const [service, setService] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null); // State to hold the PDF URL for the modal

    useEffect(() => {
        // Find the service data that matches the URL ID
        const foundService = servicesData.find((s) => s.id === id);
        setService(foundService);
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Back Button */}
                <Link to="/">
                    <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>

                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                        <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title} Projects</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">{service.description}</p>
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
                                <Card className="h-full border-slate-800 bg-slate-900/50 hover:border-purple-500/30 overflow-hidden flex flex-col">
                                    {/* Project Image */}
                                    <div className="h-48 w-full overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex-1 flex flex-col justify-between">
                                        <CardDescription className="text-gray-400 mb-6 text-sm leading-relaxed">
                                            {project.description}
                                        </CardDescription>

                                        <Button
                                            variant="gradient"
                                            className="w-full"
                                            onClick={() => setSelectedPdf(project.pdfUrl)}
                                        >
                                            <Eye className="mr-2 h-4 w-4" /> View Case Study
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                            No projects added for this category yet.
                        </div>
                    )}
                </div>
            </div>

            {/* PDF Viewer Modal (Dialog) */}
            <Dialog open={!!selectedPdf} onOpenChange={(open) => !open && setSelectedPdf(null)}>
                <DialogContent className="max-w-5xl h-[85vh] bg-slate-950 border-slate-800 p-0 overflow-hidden flex flex-col">
                    <DialogHeader className="p-4 bg-slate-900 border-b border-slate-800">
                        <DialogTitle className="text-white">Project Case Study</DialogTitle>
                        <DialogDescription className="text-gray-400">Viewing PDF documentation</DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 bg-slate-100 w-full h-full">
                        {selectedPdf && (
                            <iframe
                                src={`${selectedPdf}#toolbar=0`}
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