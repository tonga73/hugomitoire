import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-12 gap-y-3 divide-y divide-neutral-700 items-start mx-auto dark:bg-neutral-900">
      <Header />
      <Outlet />
      <div className="z-10 col-span-12">
        <Footer />
      </div>
    </div>
  );
}
