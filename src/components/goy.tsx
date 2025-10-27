"use client";

import React from "react";

interface GoyProps {
  id: string;
  children?: React.ReactNode;
}

const Goy: React.FC<GoyProps> = ({ id, children }) => {
  const handleButtonClick = (myelement: string) => {
    const newScrollMargin = 60;

    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: "smooth",
      });
    }
  };

  return (
    <button aria-label="Go Button" onClick={() => handleButtonClick(id)}>
      {children}
    </button>
  );
};

export default Goy;
