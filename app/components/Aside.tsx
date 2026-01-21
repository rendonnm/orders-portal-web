"use client";
import { useState } from "react";
import { OpenArrowIcon } from "./icons/OpenArrowIcon";
import { CloseArrowIcon } from "./icons/CloseArrowIcon";

export function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`pb-5 pt-3 flex flex-col h-full justify-between items-center ${isOpen ? "w-60 px-5" : "w-14 px-2"}`}
    >
      <header className="h-5 mb-8 w-full flex text-white justify-center">
        <h1 className="text-xl flex gap-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m17.285 10.668l5.215 3.323l-5.252 3.346L12 13.993l-5.248 3.344L1.5 13.99l5.215-3.323L1.5 7.346L6.752 4L12 7.343L17.248 4L22.5 7.346zm-.074 0L12 7.348l-5.211 3.32L12 13.988zM6.786 18.446l5.252-3.346l5.252 3.346l-5.252 3.346z"
            />
          </svg>
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
