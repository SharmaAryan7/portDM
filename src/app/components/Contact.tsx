import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@marketingpro.com",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "from-pink-500 to-pink-700",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      color: "from-blue-500 to-blue-700",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's start a conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800 hover:border-purple-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
