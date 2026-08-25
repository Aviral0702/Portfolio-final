import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  // Environment variables
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form", { position: "bottom-right" });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        toast.success("Message sent successfully!", { position: "bottom-right" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        form.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message. Please try again later.", { 
          position: "bottom-right",
          duration: 4000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      className="section-padding bg-spotify-dark section-rail"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-2.5"
        >
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-spotify-gradient mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 contact-form"
              noValidate
            >
              <Toaster
                toastOptions={{
                  style: {
                    background: '#282828',
                    color: '#fff',
                    border: '1px solid #404040',
                  },
                  success: {
                    iconTheme: { primary: '#1DB954', secondary: '#121212' },
                  },
                  error: {
                    iconTheme: { primary: '#f87171', secondary: '#121212' },
                  },
                }}
              />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-spotify-text-primary">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-spotify ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-spotify-text-primary">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-spotify ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-spotify-text-primary">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`input-spotify ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-spotify-text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`input-spotify min-h-[150px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full btn-spotify ${
                    loading ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-spotify-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-sm mx-auto lg:mx-0 space-y-4"
          >
            <p className="text-spotify-text-secondary text-sm">
              LinkedIn and GitHub if you prefer not to use the form.
            </p>
            <a
              href="https://www.linkedin.com/in/aviral-asthana-02b70824b/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-spotify album-card flex items-center gap-3 !p-4"
            >
              <Linkedin className="text-spotify-green shrink-0" size={20} />
              <span className="text-sm text-spotify-text-primary">LinkedIn</span>
            </a>
            <a
              href="https://www.github.com/Aviral0702"
              target="_blank"
              rel="noopener noreferrer"
              className="card-spotify album-card flex items-center gap-3 !p-4"
            >
              <Github className="text-spotify-green shrink-0" size={20} />
              <span className="text-sm text-spotify-text-primary">GitHub</span>
            </a>
          </motion.aside>
        </div>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-sm text-spotify-text-tertiary"
        >
          © {new Date().getFullYear()} Aviral Asthana. All rights reserved.
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;