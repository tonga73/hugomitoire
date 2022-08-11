import React, { useState } from "react";

export function Drawer({ children, openLeft }) {
  const DrawerContent = ({ children }) => {
    return (
      <div className="pt-12 px-3 z-50 h-screen text-neutral-200">
        {children}
      </div>
    );
  };

  return (
    <>
      <div
        className={`z-50 bg-red-900 top-20 left-0 w-full max-h-screen ${
          openLeft ? "absolute" : "hidden"
        }`}
      >
        {DrawerContent({ children })}
      </div>
    </>
  );
}
