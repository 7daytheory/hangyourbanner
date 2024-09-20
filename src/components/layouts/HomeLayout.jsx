import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ContactModal from '../ContactModal/ContactModal';

const HomeLayout = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // Handle form changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const FORM_KEY = import.meta.env.VITE_FORM_KEY;
        const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
        const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

        emailjs.send(SERVICE_KEY, TEMPLATE_KEY, formData, FORM_KEY)
            .then((response) => {
                toast.success('Email sent successfully!');
                closeModal();
            })
            .catch((error) => {
                toast.error('Failed to send email. Please try again.');
                console.error('Error sending email:', error);
            });
    };

    return (
        <>
            <Navigation openModal={openModal} />
            <Outlet />
            <Footer 
                openModal={openModal}/>
            <ContactModal
                isOpen={isModalOpen}
                onClose={closeModal}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <ToastContainer position="top-center" className="fixed w-[100%] lg:w-[30%] center m-auto" />
        </>
    );
};

export default HomeLayout;
