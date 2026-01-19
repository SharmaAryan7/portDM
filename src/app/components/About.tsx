import { motion } from "motion/react";
import { Target, Users, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that impact your bottom line.",
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your success is our priority. We build lasting partnerships.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead with cutting-edge strategies and technologies.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
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
          {values.map((value, index) => {
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
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-slate-800 hover:border-purple-500/50"
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
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
