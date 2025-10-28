// components/ContactSection.jsx
import React, { JSXElementConstructor } from 'react';

interface ContactSectionProps {
  iconSrc: string;
  heading: string;
  children: React.ReactNode; // ✅ correct type
}

const ContactSection: React.FC<ContactSectionProps> = ({ iconSrc, heading, children }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        {/* <img src={iconSrc} alt={`${heading} icon`} className="w-12 h-12" /> */}
        {/* <h3 className="text-2xl font-bold">{heading}</h3> */}
      </div>
      {/* <div className="pl-16">  */}
      <div> 
                {children}
      </div>
    </div>
  );
};

export default ContactSection;
