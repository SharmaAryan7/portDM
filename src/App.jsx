import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { ServiceDetail } from "./components/pages/ServiceDetail";
import { Toaster } from "./components/ui/sonner";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-slate-950 font-sans text-foreground">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service/:id" element={<ServiceDetail />} />
                </Routes>
                <Toaster position="top-center" />
            </div>
        </Router>
    );
}