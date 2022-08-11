import React from "react";
import { Link } from "react-router-dom";

import { v4 } from "node-uuid";

import Drawer from "../drawer/Drawer";

export function Navigation() {
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
            <Link
              to={e.path}
              className="font-reggae text-center px-1"
              key={v4()}
            >
              {e.name}
            </Link>
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
}
