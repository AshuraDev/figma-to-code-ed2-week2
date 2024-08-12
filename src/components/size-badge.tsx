import React from "react";

const SizeBadge = ({ size, selected }: { size: string; selected: boolean }) => {
  return (
    <button
      className={
        selected
          ? "flex items-center justify-center py-1 px-5 rounded-full border-2 border-color_4 bg-color_4 text-white font-medium text-base"
          : "flex items-center justify-center py-1 px-5 rounded-full border-2 border-color_4 bg-white text-color_4 font-medium text-base"
      }
    >
      {size}
    </button>
  );
};

export default SizeBadge;
