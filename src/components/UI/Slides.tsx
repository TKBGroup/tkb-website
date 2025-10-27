"use client";

import React  from 'react';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; 

// --- Helper function to convert Tailwind 'rem' value to pixels (standard 16px base)
const remToPx = (rem: number): number => rem * 16;

function Slides() {
  // Array defining the number of cards
  const emptyArray = Array.from({ length: 10 }); 

  const wrapperRef = useRef(null);
  
  // Get scroll progress when the wrapper is in view
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    // The animation starts when the wrapper top hits the center, and ends when the wrapper bottom hits the center.
    offset: ["start center", "end center"]
  });

  // --- Animation Constants (Must match CSS values) ---
  // The CSS has solutionCard at width: 40rem and solutionCards gap: 1rem
  const CARD_WIDTH = remToPx(40); // 40rem in pixels
  const GAP = remToPx(1);         // 1rem gap
  const TOTAL_CARD_WIDTH_WITH_GAP = CARD_WIDTH + GAP;
  const NUM_CARDS = emptyArray.length;

  // The total width of all cards and gaps combined
  const CONTENT_WIDTH = TOTAL_CARD_WIDTH_WITH_GAP * NUM_CARDS - GAP;

  // --- Calculation for Scroll Boundaries ---

  // 1. Where the animation starts (scrollYProgress = 0):
  // We want the left edge of the FIRST card to align with the left edge of the sticky solutionContainer.
  const START_POS_X = 0; // The cards list is not translated initially

  // 2. Where the animation ends (scrollYProgress = 1):
  // We want the right edge of the LAST card to align with the right edge of the sticky solutionContainer.
  // The solutionContainer's width is 100% (viewport width).
  // The cards must translate (move left) by: (Total Content Width) - (Container Width)
  // We use `window.innerWidth` for the container width, assuming `solutionContainer` is full-width.
  
  // NOTE: This value must be calculated dynamically, as window.innerWidth changes.
  // This hook handles the window resize implicitly within Framer Motion's `useTransform` 
  // or should ideally be wrapped in a state/resize listener if used outside of `useTransform`.
  // For the `useTransform` output, we calculate the negative translation required.
  const END_POS_X = () => {
    // CONTENT_WIDTH: Total pixel width of all cards combined.
    // window.innerWidth: Width of the viewport/container.
    // The translation distance is the width that must be hidden to the left.
    const containerWidth = window.innerWidth;
    const translationDistance = CONTENT_WIDTH - containerWidth;
    
    // We translate to the LEFT, so it's a negative value.
    return translationDistance * -1;
  };
  
  // Since `useTransform` must take static values, we must calculate the
  // translation for the last card's alignment.

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    // Output Range: [Starting X position, Ending X position]
    [START_POS_X, END_POS_X()]
  );

  return (
    <>
      {/* solutionPageWrapper: Provides the height (300vh) to scroll against. 
        Vertical scrolling in this section now drives the horizontal movement.
      */}
      <motion.div className="solutionPageWrapper" ref={wrapperRef}>
        {/* solutionContainer: Is sticky and acts as the viewport for the horizontal scroll. 
          Its fixed position prevents the cards from scrolling vertically.
        */}
        <div className="solutionContainer">
          {/* solutionCards: The horizontally scrolling row. 
            The Framer Motion 'style' object applies the calculated 'x' translation.
          */}
          <motion.div style={{ x }} className="solutionCards">
            {emptyArray.map((_, index) => (
              <div className="solutionCard" key={index}>
                <p className="text-xl text-gray-700">Item {index + 1}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
export default Slides;