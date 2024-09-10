import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactModal = ({ isOpen, onClose }) => {
  const FORM_KEY = import.meta.env.VITE_FORM_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

  const [formData, setFormData] = useState({
    name: '',
    subject: 'Hang Your Banner',
    email: '',
    message: '',
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

    emailjs
      .send(SERVICE_KEY, TEMPLATE_KEY, formData, FORM_KEY)
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          setTimeout(() => {
            onClose();
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send the message.');
        }
      );
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactModal;
