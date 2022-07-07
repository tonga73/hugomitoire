import React, { useState } from "react";

export default function Drawer({ children }) {
  const [openLeft, setOpenLeft] = useState(false);

  const DrawerContent = ({ children }) => {
    return (
      <div className="pt-12 px-3 z-10 bg-neutral-900 h-screen col-span-4 text-neutral-200">
        {children}
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          setOpenLeft(!openLeft);
        }}
        className={`absolute top-2.5 text-neutral-200 z-20 ${
          openLeft ? "z-50" : ""
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {!!openLeft && (
        <div className="absolute top-0 left-0 grid grid-cols-12 w-full h-screen">
          {DrawerContent({ children })}
          <div
            onClick={() => {
              setOpenLeft(!openLeft);
            }}
            className="bg-neutral-900 bg-opacity-90 col-span-8"
          ></div>
        </div>
      )}
    </>
  );
}
