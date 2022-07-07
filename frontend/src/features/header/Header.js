import React from "react";
import Drawer from "../drawer/Drawer";

import { v4 } from "node-uuid";

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
        <div className="sm:hidden lg:flex w-full text-white">
          <nav className="w-full grid grid-flow-col gap-1">
            {locations.map((e, index) => (
              <div className="text-center px-1" key={v4()}>
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
        <button className="uppercase  bg-neutral-200 dark:text-neutral-700 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm">
          Button 1
        </button>
      </nav>
    );
  };

  return (
    <header className="flex justify-center items-center dark:bg-gradient-to-b dark:from-neutral-900  h-12 fixed z-50 w-full">
      <div className="container mx-auto grid grid-cols-7 items-center">
        <div className="col-span-2">{Navigation()}</div>
        <div className="col-span-3 text-center text-3xl tracking-wider font-light uppercase dark:text-neutral-200 cursor-default select-none">
          {Title()}
        </div>
        <div className="col-span-2 w-1/2 place-self-end">{ExtraMenu()}</div>
      </div>
    </header>
  );
}
