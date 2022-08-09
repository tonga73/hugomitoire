import React from "react";
import Drawer from "../drawer/Drawer";
import { Link } from "react-router-dom";

import { v4 } from "node-uuid";

import { SocialLinks } from "../socialLinks/SocialLinks";

export default function Header() {
  const Navigation = () => {
    const locations = [
      {
        name: "Inicio",
        path: "/",
      },
      {
        name: "Libros",
        path: "/libros",
      },
      {
        name: "Blog",
        path: "/blog",
      },
      {
        name: "Media",
        path: "/media",
      },
      {
        name: "Contacto",
        path: "/contacto",
      },
    ];
    return (
      <>
        <div className="sm:hidden lg:flex w-full text-white text-opacity-70">
          <nav className="w-full grid grid-flow-col gap-1">
            {locations.map((e, index) => (
              <div className="font-reggae text-center px-1" key={v4()}>
                {e.name}
              </div>
            ))}
          </nav>
        </div>
        <div className="lg:hidden">
          <Drawer>
            <nav className="w-full grid grid-flow-row gap-y-3 p-3">
              {locations.map((e, index) => (
                <div className="text-2xl px-1" key={v4()}>
                  {e.name}
                </div>
              ))}
            </nav>
          </Drawer>
        </div>
      </>
    );
  };

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
    <header className="flex justify-center items-center dark:bg-gradient-to-b dark:from-neutral-900 hover:dark:bg-neutral-900 hover:transition-colors h-20 py-5 fixed z-50 w-full">
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
