import React from "react";

export default function Header() {
  return (
    <header class="w-full bg-sky-400 shadow-md shadow-blue-300">
      <nav class="container mx-auto flex min-h-[60px] items-center justify-between px-5 py-2">
        <div class="w-[160px] md:w-[200px]">
          <img
            src="https://www.websonica.it/wp-content/uploads/2022/03/WBS_logo_b.png"
            alt="logo immagine"
            class="h-auto w-full"
          />
        </div>
        <div>
          <ul class="flex gap-3 text-white">
            <li class="hover:text-blue-800 hover:underline">
              <a href="#" title="Menu 1">
                Menu 1
              </a>
            </li>
            <li class="hover:text-blue-800 hover:underline">
              <a href="#" title="Menu 2">
                Menu 2
              </a>
            </li>
            <li class="hover:text-blue-800 hover:underline">
              <a href="#" title="Menu 3">
                Menu 3
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
