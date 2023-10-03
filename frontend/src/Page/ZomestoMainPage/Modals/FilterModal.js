import React from "react";
import { createPortal } from "react-dom";

const FilterModal = () => {
  return createPortal(
    <div className="top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30">
      <div className="top-5 left-5 bg-white text-black">HHHHHHHHHHHHHHHH</div>
    </div>,
    document.getElementById("portal")
  );
};

export default FilterModal;
