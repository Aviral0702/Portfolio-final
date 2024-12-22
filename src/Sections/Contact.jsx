import React, { useState } from "react";
import contactUs from "../assets/Images/undraw_personal-text_090t.svg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      id="home"
      className="section bg-gray-950 text-white flex flex-col justify-center p-10"
    >
      <h1 className="text-6xl mb-8 text-center">Contact</h1>
      <div className="flex justify-evenly items-center">
        <div className="w-full max-w-md">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
          <img src={contactUs} className="h-[400px] w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
