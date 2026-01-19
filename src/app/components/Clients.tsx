import { motion } from "motion/react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";

export function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientLogos = [
    { name: "TechCorp", bg: "from-blue-500 to-cyan-500" },
    { name: "Innovate", bg: "from-purple-500 to-pink-500" },
    { name: "GrowthLab", bg: "from-green-500 to-emerald-500" },
    { name: "DigitalX", bg: "from-orange-500 to-red-500" },
    { name: "CloudFlow", bg: "from-indigo-500 to-purple-500" },
    { name: "BrandWise", bg: "from-pink-500 to-rose-500" },
  ];

  const testimonials = [
    {
      quote:
        "Working with this team has been transformative for our business. Our organic traffic increased by 300% in just 6 months!",
      author: "Sarah Johnson",
      position: "CEO, TechCorp",
      image:
        "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      quote:
        "The ROI from their PPC campaigns exceeded our expectations. Professional, data-driven, and results-focused.",
      author: "Michael Chen",
      position: "Marketing Director, Innovate",
      image:
        "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg3NjgyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      quote:
        "Their creative approach to social media marketing helped us double our engagement and build a loyal community.",
      author: "Emily Rodriguez",
      position: "Founder, GrowthLab",
      image:
        "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODgwNjY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-purple-500 transition-colors" />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-8">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
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
          {clientLogos.map((client, index) => (
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

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl shadow-2xl border border-slate-800">
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
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
