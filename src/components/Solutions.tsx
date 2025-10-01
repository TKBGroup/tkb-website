'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
 
const services = [
  {
    icon: '/icons/planning.png',
    subheading: 'MILLWORK PROJECTS MANAGEMENT',
    heading: 'Project Planning',
    description: 'Professional project planning and management for any complexity of millwork and woodworking projects.',
  },
  {
    icon: '/icons/contracting.png',
    subheading: 'TOP MILLWORK SPECIALISTS',
    heading: 'Millwork Contracting',
    description: 'With a strong dedication to sustainability and a loyal base of returning clients, we take pride in the trust we have earned over the years.',
  },
  {
    icon: '/icons/bidding.png',
    subheading: 'FREE ESTIMATE',
    heading: 'Transparent Bidding',
    description: 'Get a free, detailed estimate for your millwork project, ensuring transparency and quality with our competitive pricing.',
  },
  {
    icon: '/icons/services.png',
    subheading: 'FULL SPECTRUM SERVICES',
    heading: 'Complete Services',
    description: 'For your architectural millwork, custom cabinets, kitchens, or built-ins needs, rest assured, we’ve got you covered with everything necessary to deliver exceptional results.',
  },
  {
    icon: '/icons/fabrication.png',
    subheading: 'OWN FABRICATION FACILITY',
    heading: 'In-house Fabrication',
    description: 'We employ state-of-the-art equipment, cutting-edge software, and top professionals to guarantee the quality of our solutions.',
  }, 
];

export default function Solutions() {
  // Animation variant for the main title text (lifts up)
  const titleVariant : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variant for the service cards (page flip)
  const cardVariant : Variants = {
    hidden: { opacity: 0, rotateY: -90, transformOrigin: 'left' },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] } },
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Animated Title */}
       

        {/* Animated Grid of Service Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15 }}
        > <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.p variants={titleVariant} className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
            One-Stop Shop
          </motion.p>
          <motion.h2 variants={titleVariant} className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            A-to-Z Millwork Solutions
          </motion.h2>
        </motion.div>
          {services.map((service) => (
            <motion.div key={service.heading} variants={cardVariant} className="bg-transparent p-8 ">
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gray-100 shadow-inner">
                <Image src={service.icon} alt="" width={44} height={44} />
              </div>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-yellow-600">
                {service.subheading}
              </h3>
              <p className="mt-1 text-xl font-bold text-gray-900">{service.heading}</p>
              <p className="mt-4 text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
