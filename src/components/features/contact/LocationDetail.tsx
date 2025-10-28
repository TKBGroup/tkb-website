// components/LocationDetail.jsx
import { LocalPattern } from 'next/dist/shared/lib/image-config';
import React from 'react';

type locationInput = {
  label?: string, 
  address: string
}

const LocationDetail : React.FC<locationInput> = ({ label, address }) => {
  return (
    <div className="my-4">
      {label && <p className="font-medium mb-2">{label}</p>}
      <div className="flex items-center gap-3">
        <img src="/images/contact/location.png" alt="location icon" className="w-6 h-6" />
        <p>{address}</p>
      </div>
    </div>
  );
};

export default LocationDetail;
