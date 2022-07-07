import React from "react";

export default function Banner() {
  return (
    <div className="grid grid-cols-12 gap-3 divide-y divide-neutral-700">
      <div className="col-span-12 flex gap-3 p-1 items-center max-h-64 overflow-hidden dark:bg-neutral-900">
        <div
          style={{
            backgroundImage:
              "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Books-bookshelf-bookstore-159778.jpg/800px-Books-bookshelf-bookstore-159778.jpg)",
          }}
          className="h-full w-1/3 bg-contain bg-center bg-no-repeat"
        >
          <div className="h-full w-full bg-gradient-to-l from-neutral-900 via-transparent"></div>
        </div>
        <div className="w-2/3 h-44 overflow-hidden">
          <h3 className="w-full col-span-12 text-3xl font-semibold dark:text-neutral-200">
            Serie Title Goes Right Here
          </h3>
          <h5 className="w-full dark:text-neutral-500 uppercase">Novela</h5>
          <h6 className="w-full dark:text-neutral-200 font-light indent-1 p-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            deserunt, quam sequi est quasi ipsam veritatis voluptate ea harum,
            rem repudiandae minima enim voluptates voluptatibus facere unde,
            error sapiente dolorum. Nulla sunt recusandae, quidem fugit
            molestiae cum officia omnis, ea aspernatur exercitationem dolore
            voluptate veritatis excepturi magnam praesentium laboriosam ducimus
            eius. Illum dolores provident fugit enim aspernatur ullam saepe
            quaerat? Adipisci quidem nemo perferendis nisi ducimus praesentium
            iusto voluptate eaque nobis! Porro quo asperiores doloremque facere
            quia, soluta, consequatur perferendis magnam quos atque voluptatum,
            pariatur laudantium eligendi ipsa exercitationem velit.
          </h6>
        </div>
      </div>
      <div className="col-span-12 px-3 py-1.5 flex justify-between gap-3">
        <p className="dark:text-neutral-400 uppercase font-light">
          Género: Género Negro | Tomos: 9
        </p>
        <nav className="flex items-center gap-3 dark:text-neutral-200">
          <button>
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </button>
          <button className="uppercase dark:bg-neutral-200 dark:text-neutral-700  hover:dark:bg-transparent hover:dark:text-neutral-200 transition-colors duration-300 px-3 py-1 rounded-md ">
            Ver más
          </button>
        </nav>
      </div>
    </div>
  );
}
