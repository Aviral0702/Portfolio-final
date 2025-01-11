import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import contactUs from "../assets/Images/undraw_personal-text_090t.svg";

const Contact = () => {
  const notify = () =>
    toast.success("Message sent successfully!", { position: "bottom-right" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          notify();
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      id="contact"
      className="section min-h-screen bg-gray-900 text-white flex flex-col justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Header with gradient underline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-16 sm:mt-20 mb-8 sm:mb-12 text-center relative">
        Contact
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></span>
      </h1>

      {/* Main content container */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
        {/* Form section */}
        <div className="w-full max-w-md">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <Toaster />
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
                rows="4"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Image section */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <img
            src={contactUs}
            alt="Contact illustration"
            className="w-full h-auto max-w-[280px] sm:max-w-[320px] md:max-w-[400px] mx-auto hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 pb-6 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} Aviral Asthana. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
