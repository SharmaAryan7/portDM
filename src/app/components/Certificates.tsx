import { motion } from "motion/react";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      icon: Award,
      title: "Google Ads Certified",
      issuer: "Google",
      year: "2024",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "HubSpot Inbound Marketing",
      issuer: "HubSpot Academy",
      year: "2024",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Meta Blueprint Certified",
      issuer: "Meta",
      year: "2023",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "LinkedIn Marketing Expert",
      issuer: "LinkedIn",
      year: "2023",
      color: "from-indigo-500 to-blue-600",
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
            Certificates & Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certified experts with proven expertise across major platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 h-full cursor-pointer overflow-hidden relative"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
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
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
