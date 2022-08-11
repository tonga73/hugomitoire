import React from "react";

export function SocialLinks() {
  const links = [
    {
      icon: "facebook",
    },
    {
      icon: "instagram",
    },
    {
      icon: "youtube",
    },
    {
      icon: "youtube",
    },
  ];
  return (
    <nav className="grid grid-cols-4 gap-2">
      {links.map((link) => {
        return (
          <button className="opacity-70 place-self-center h-7 w-7">
            <img className="" src={`img/icons/${link.icon}.png`} alt="" />
          </button>
        );
      })}
    </nav>
  );
}
