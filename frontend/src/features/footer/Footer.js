import React from "react";

export default function Footer() {
  const Navigation = () => {
    return (
      <nav className="flex w-full justify-around items-center gap-x-1">
        <button className="underline underline-offset-4 dark:text-neutral-400 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm">
          Button 1
        </button>
        <button className="underline underline-offset-4 dark:text-neutral-400 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm">
          Button 2
        </button>
        <button className="underline underline-offset-4 dark:text-neutral-400 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm">
          Button 3
        </button>
        <button className="underline underline-offset-4 dark:text-neutral-400 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm">
          Button 4
        </button>
        <button className="underline underline-offset-4 dark:text-neutral-400 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm">
          Button 5
        </button>
      </nav>
    );
  };
  return (
    <div className="h-80 flex bg-gradient-to-t dark:from-neutral-900 via-neutral-900">
      <div className="flex flex-col gap-y-10 justify-center items-center container mx-auto">
        <div className="w-2/3">{Navigation()}</div>
        <div className="w-full flex flex-col text-center justify-end gap-1 dark:text-neutral-300">
          <h5 className="w-full uppercase tracking-wider font-bold text-3xl dark:text-neutral-500">
            Hugo Mitoire
          </h5>
          © Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}
