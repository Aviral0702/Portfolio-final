import React, { useState,useRef } from "react";
import toast, {Toaster} from "react-hot-toast";
import emailjs from "@emailjs/browser";
import contactUs from "../assets/Images/undraw_personal-text_090t.svg";
const Contact = () => {
  const notify = () => toast.success("Message sent successfully!",{position: "bottom-right"});
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
          })
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
      className="section bg-gray-900 text-white flex flex-col justify-center p-10"
    >
      <h1 className="text-6xl mb-8 text-center">Contact</h1>
      <div className="flex justify-evenly items-center">
        <div className="w-full max-w-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <Toaster/>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                rows="4"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </form>
          <footer className="mt-8 text-center text-sm text-gray-500">
            © 2024 Aviral Asthana. All rights reserved.
          </footer>
        </div>
        <div>
          <img
            src={contactUs}
            className="h-[400px] w-[400px] hover:scale-125 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
