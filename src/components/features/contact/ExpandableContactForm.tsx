// components/ExpandableContactForm.jsx

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContactForm from './ContactForm'; // Assuming your form is in the same directory

const ExpandableContactForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleForm = () => {
    setIsExpanded(prev => !prev);
  };

  // Animation variants for the container
  const formVariants: Variants = {
    hidden: { height: 0, opacity: 0, marginTop: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      marginTop: '2rem', // Adds some space between the button and the form
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="text-center">
        <button
          onClick={toggleForm}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-3 hover:bg-gold hover:text-white font-semibold bg-transparent border-3 border-gold text-gold transition-colors text-lg"
          aria-expanded={isExpanded}
          aria-controls="expandable-form-content"
        >
          <span>Fill The Contact Form</span>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {/* AnimatePresence is key for handling the exit animation */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id="expandable-form-content"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden" // Prevents content from overflowing during animation
          >
            {/* 
              Here we render your existing ContactForm.
              - `isOpen` is always true because its visibility is controlled by the parent.
              - `onClose` is mapped to our toggle function.
              - `closeBtn` is false because we don't want the 'X' in an inline form.
              - `isInline` is a new prop to handle styling differences.
            */}
            <ContactForm 
              isOpen={true} 
              onClose={toggleForm} 
              closeBtn={false}
              isInline={true} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableContactForm;
