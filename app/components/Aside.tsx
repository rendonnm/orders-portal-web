"use client";
import { useState } from "react";
import { OpenArrowIcon } from "./icons/OpenArrowIcon";
import { CloseArrowIcon } from "./icons/CloseArrowIcon";
import { BrandLogo } from "./brand/BrandLogo";

export function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`pb-5 pt-3 flex flex-col h-full justify-between items-center ${isOpen ? "w-60 px-5" : "w-14 px-2"}`}
    >
      <header className="h-5 mb-8 w-full flex text-white justify-center">
        <h1 className="text-xl flex gap-2 font-bold">
          <BrandLogo />
          <span className={`${isOpen ? "" : "hidden"}`}>Partner Portal</span>
        </h1>
      </header>
      <section className="h-full">
        <nav className="flex">{/*TODO: complete the sidebar items*/}</nav>
      </section>
      <footer>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="text-md text-white bg-primary-400 hover:bg-primary-300 transition-colors p-2 rounded-lg cursor-pointer"
        >
          {isOpen ? (
            <div className="flex gap-2 items-center">
              <span>Collapse sidebar</span>
              <CloseArrowIcon />
            </div>
          ) : (
            <OpenArrowIcon />
          )}
        </button>
      </footer>
    </aside>
  );
}
