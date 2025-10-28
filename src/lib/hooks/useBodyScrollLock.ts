

import { useLayoutEffect } from 'react';

// A custom hook to lock the body scroll when a component (like a modal) is mounted.
export function useBodyScrollLock(isLocked : boolean) {
  useLayoutEffect(() => {
    // Get the original value of the body's overflow style.
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      // When locked, set the overflow to 'hidden'.
      document.body.style.overflow = 'hidden';
    }

    // This is the cleanup function that will run when the component unmounts
    // or when the `isLocked` dependency changes.
    return () => {
      // Restore the original overflow style.
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]); // Only re-run the effect if the `isLocked` state changes.
}
