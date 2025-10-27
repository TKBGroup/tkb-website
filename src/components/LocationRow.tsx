// components/LocationRow.jsx
import React from 'react';
import LocationDetail from './LocationDetail';

type Location = {
  id: string;
  name: string;
  address: string;
  contactPerson: string;
  email: string;
  phone: string;
  mapUrl: string;
};

type LocationRowProps = {
  location: Location;
};

const LocationRow: React.FC<LocationRowProps> = ({ location }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 py-8 border-b border-darkblue/20 last:border-b-0">
      
      {/* Left Column: Text Content */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <h4 className="text-2xl font-medium mb-4">{location.name}</h4>
        <LocationDetail label="" address={location.address} />
        <p className="py-4 font-medium">{location.contactPerson}</p>
        <p className="pb-1 font-medium">
          <b>Email:</b> <a href={`mailto:${location.email}`} className="text-gold hover:underline">{location.email}</a>
        </p>
        <p className="pb-1 font-medium">
          <b>Phone:</b> <a href={`tel:${location.phone}`} className="text-gold hover:underline">{location.phone}</a>
        </p>
      </div>

      {/* Right Column: Map - CORRECTED FOR SMALL SCREENS */}
      <div className="w-full lg:w-2/3 h-[350px] lg:h-auto rounded-lg overflow-hidden">
        <iframe
          src={location.mapUrl}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationRow;
