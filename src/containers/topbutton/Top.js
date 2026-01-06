import React, { useEffect, useRef } from "react";
import "./Top.scss";
import { IoChevronUp } from "react-icons/io5";

export default function Top() {
  const topButtonRef = useRef(null);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    // Clear any existing window.onscroll handlers (from old code)
    if (window.onscroll) {
      window.onscroll = null;
    }

    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
      const button = topButtonRef.current;
      if (!button) return;
      
      try {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          button.style.visibility = "visible";
        } else {
          button.style.visibility = "hidden";
        }
      } catch (error) {
        // Silently fail if button is removed
        console.warn('[Top] Error updating button visibility:', error);
      }
    }

    // Set initial state
    scrollFunction();

    // Add scroll listener
    window.addEventListener("scroll", scrollFunction);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      // Clear window.onscroll if it was set
      if (window.onscroll === scrollFunction) {
        window.onscroll = null;
      }
    };
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  return (
    <button ref={topButtonRef} onClick={TopEvent} id="topButton" title="Go to top">
      <IoChevronUp />
    </button>
  );
}
