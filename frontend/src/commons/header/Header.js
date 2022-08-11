import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";

export default function Header() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  const Title = () => {
    return "Hugo Mitoire";
  };

  const ExtraMenu = () => {
    return (
      <nav className="flex w-full justify-around items-center gap-x-1">
        <Link
          to="/admin"
          className="uppercase text-center bg-neutral-200 hover:bg-neutral-300 dark:text-neutral-700 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm"
        >
          Button 1
        </Link>
      </nav>
    );
  };

  return (
    <header
      className={`flex justify-center items-center transition-colors duration-700 h-20 py-5 fixed z-50 w-full hover:dark:bg-neutral-900 ${
        offset > 0 ? "bg-neutral-900" : "bg-gradient-to-b from-neutral-900"
      }`}
    >
      <div className="container mx-auto grid grid-cols-7 items-center">
        <div className="col-span-2">{Navigation()}</div>
        <div className="col-span-3 font-cinzel text-center text-5xl tracking-wider uppercase dark:text-white cursor-default select-none">
          {Title()}
        </div>
        <div className="col-span-2 w-1/2 place-self-end self-center">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
