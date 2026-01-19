import { motion } from "motion/react";
import {
  Search,
  Share2,
  MousePointerClick,
  Palette,
  FileText,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO",
      description:
        "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage your audience and build community with compelling social media campaigns.",
      gradient: "from-pink-500 to-pink-700",
    },
    {
      icon: MousePointerClick,
      title: "Paid Ads",
      description:
        "Maximize ROI with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Palette,
      title: "Branding",
      description:
        "Create a memorable brand identity that resonates with your target audience.",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Tell your story with strategic content that educates, engages, and converts.",
      gradient: "from-violet-500 to-violet-700",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
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
            Comprehensive digital marketing solutions tailored to your unique
            business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-800 hover:border-purple-500/50 h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className={`bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
