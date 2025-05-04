import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import contactUs from "../assets/Images/undraw_personal-text_090t.svg";

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
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 relative inline-block">
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2"></span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="w-full max-w-md lg:max-w-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl"
              noValidate
            >
              <Toaster />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-3 bg-gray-700 text-white border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  }`}
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-3 bg-gray-700 text-white border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  }`}
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-300">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-3 bg-gray-700 text-white border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.subject ? "border-red-500" : "border-gray-600"
                  }`}
                  required
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-3 bg-gray-700 text-white border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[150px] ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  }`}
                  required
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition-all duration-200 ${
                    loading ? "opacity-80 cursor-not-allowed" : "hover:shadow-lg"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </div>

          <div className="w-full max-w-sm lg:max-w-md flex justify-center">
            <img
              src={contactUs}
              alt="Contact illustration"
              className="w-full h-auto max-w-[400px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aviral Asthana. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default Contact;