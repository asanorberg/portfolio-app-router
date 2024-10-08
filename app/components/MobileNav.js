"use client";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

import { useTheme } from "../context/ThemeProvider";
import Link from "next/link";

export default function MobileNav() {
  const { state, toggleTheme } = useTheme();

  return (
    <div className="w-full">
      <span className="flex flex-col fixed z-0 right-6 top-4 md:hidden space-y-2">
        <button
          className="icon dark-mode-icon mr-4 text-2xl border-none p-0 text-slate-400"
          onClick={toggleTheme}
          type="button"
        >
          {state.theme === "light" ? (
            <MdOutlineLightMode />
          ) : (
            <MdOutlineNightlight />
          )}
        </button>
        <Link
          href="https://github.com/asanorberg"
          target="_blank"
          rel="noopener noreferrer"
          className="icon text-2xl text-slate-400 hover:text-[#c9510c]"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/asa-norberg-373ba4110"
          target="_blank"
          rel="noopener noreferrer"
          className="icon text-2xl text-slate-400 hover:text-[#0077B5]"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="#"
          className="icon email- text-2xl text-slate-400 hover:text-[#34a853]"
        >
          <FaRegEnvelope />
        </Link>
      </span>
    </div>
  );
}
