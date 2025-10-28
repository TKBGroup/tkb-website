// hooks/useDelayedHover.ts

import { useState, useRef, useEffect } from 'react';

export function useDelayedHover(openDelay: number, closeDelay: number) {
  const [isOpen, setIsOpen] = useState(false);
  // We use `any` for the timeout ref to be compatible with both Node.js and browser environments
  const openTimeout = useRef<any>(null);
  const closeTimeout = useRef<any>(null);

  const handleMouseEnter = () => {
    // If a "close" timer is running, cancel it.
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    // Set a new timer to open the menu after the specified delay.
    openTimeout.current = setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  };

  const handleMouseLeave = () => {
    // If an "open" timer is running, cancel it.
    if (openTimeout.current) {
      clearTimeout(openTimeout.current);
    }
    // Set a new timer to close the menu.
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  };

  // This cleanup effect ensures that no timers are left running if the component unmounts.
  useEffect(() => {
    return () => {
      clearTimeout(openTimeout.current);
      clearTimeout(closeTimeout.current);
    };
  }, []);

  return { isOpen, handleMouseEnter, handleMouseLeave };
}
