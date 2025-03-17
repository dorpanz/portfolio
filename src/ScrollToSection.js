import React, { useEffect } from "react";

const ScrollToSection = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash; // Get the hash from URL
      if (id) {
        const element = document.querySelector(id); // Select the element by ID
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Call once to handle initial page load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null; // No need to render anything
};

export default ScrollToSection;
