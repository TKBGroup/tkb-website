// components/UI/ThankYouMessage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ThankYouMessage = ({ onClose }: {onClose : ()  => void}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-8 h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
      <h2 className="text-3xl font-bold text-[#0A2540] mb-3">Thank You!</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Your inquiry has been submitted successfully. We will get back to you as soon as possible.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2 bg-[#0A2540] text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors"
      >
        Close
      </button>
    </motion.div>
  );
};

export default ThankYouMessage;
