"use client";

import React, { useState } from 'react';
import { X, CheckCircle, Paperclip, ChevronDown, ArrowRight } from 'lucide-react';

type InputTypes = {
    id: string;
    label: string;
    type?: string;
    placeholder: string;
    required?: boolean;
};

// A reusable component for input fields to keep the code DRY
const FormInput = ({ id, label, type = "text", placeholder, required = false }: InputTypes) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
            <input
                type={type}
                id={id}
                name={id}
                autoComplete='off'
                placeholder={placeholder}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {/* This is a placeholder for the validation icon */}
            <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400" />
        </div>
    </div>
);

export default function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

    if (!isOpen) {
        return null;
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
            console.log("handleBackdropClick");
        }
    };


    const [attachedFiles, setAttachedFiles] = useState(0);

    return (


        <>
            <div onClick={handleBackdropClick} className="relative w-full max-w-6xl mx-auto p-8 backdrop-blur-xl bg-white/50 fixed inset-0">
            {/* <div onClick={handleBackdropClick} className="relative w-full max-w-6xl mx-auto p-8 "> */}
                {/* --- Close Button --- */}
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800">
                    <X size={24} />
                </button>

                <form className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">

                    {/* === COLUMN 1: CONTACT INFORMATION === */}
                    <section className="flex flex-col space-y-6">
                        <h2 className="text-2xl font-bold text-[#0A2540]">Contact Form</h2>
                        <div>
                            <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-4">Contact Information</p>
                            <div className="space-y-4">
                                <FormInput id="fullName" label="Full Name" placeholder="John Doe" required />
                                <FormInput id="contactNumber" label="Contact Number" type="tel" placeholder="+11234567890" required />
                                <FormInput id="email" label="Email" type="email" placeholder="example@mail.com" />
                            </div>
                        </div>
                        {/* --- Privacy Banner --- */}
                        <div className="relative bg-gray-800 text-white p-6 rounded-lg overflow-hidden mt-auto">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-20"
                                style={{ backgroundImage: "url('/images/design.png')" }}
                            ></div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg">TKB Group values your privacy.</h3>
                                <a href="/privacy-policy" className="group inline-flex items-center mt-4 border border-white-1 px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition-colors">
                                    Check our Privacy Page
                                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* === COLUMN 2: PROJECT TYPE / INQUIRY === */}
                    <section className="flex flex-col space-y-6 pt-16">
                        <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-4">Project Type / Inquiry Category</p>

                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Project Type</label>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center cursor-pointer">
                                    <input type="radio" name="projectType" value="Residential" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                                    <span className="ml-2 text-sm">Residential</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input type="radio" name="projectType" value="Commercial" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                                    <span className="ml-2 text-sm">Commercial</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="serviceOfInterest" className="block text-sm font-semibold text-gray-800 mb-1">Service of Interest</label>
                            <div className="relative">
                                <select
                                    id="serviceOfInterest"
                                    name="serviceOfInterest"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="" disabled>Choose the reason of your inquiry</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="new-project">New Project</option>
                                    <option value="support">Support</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        <FormInput id="customerID" label="Customer ID" placeholder="Enter your Customer ID" />
                    </section>

                    {/* === COLUMN 3: PROJECT DETAILS === */}
                    <section className="flex flex-col pt-16">
                        <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-800 mb-1">Project Details</label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            rows={10}
                            className="w-full flex-grow px-4 py-2 bg-white border border-gray-300 rounded-md resize-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
                        ></textarea>

                        <div className="flex justify-between items-center mt-2">
                            <button type="button" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                                <Paperclip className="w-4 h-4 mr-1" />
                                Attach Files
                            </button>
                            <span className="text-xs text-gray-500">Attached Files({attachedFiles})</span>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0A2540] text-white font-semibold py-3 mt-6 rounded-md hover:bg-opacity-90 transition-colors"
                        >
                            Submit Your Inquiry
                        </button>
                    </section>

                </form>
            </div>
        </>
    );
}
