import React from "react";

export default function Card({ children }) {
  return (
    <div className="w-48">
      <div className="px-3 pt-3 border-r-2 border-t-2 rounded-tr-md border-neutral-700 hover:cursor-pointer">
        <div className="relative -right-7 hover:-translate-x-7 transition-transform duration-500">
          {children}
        </div>
      </div>
    </div>
  );
}
