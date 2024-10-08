"use client";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "../context/ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { state, toggleTheme } = useTheme();

  return (
    // <-------- Nav menu -------->
    <div className="w-full fixed">
      <header className="flex sm:flex-row md:items-center justify-between p-4 lg:px-8 mb-10 bg-white">
        <nav>
          <div className="flex items-center whitespace-nowrap md:space-x-16 space-x-8">
            <Link className="nav-link" href="/">
              HOME
            </Link>
            <Link className="nav-link" href="#projects">
              PROJECTS
            </Link>
            <Link className="nav-link" href="#about">
              ABOUT ME{" "}
            </Link>
          </div>
        </nav>

        {/* // <-------- Icons --------> */}
        <div className="flex items-center md:mt-0">
          <span className="dark-mode-span hidden md:flex space-x-6 mr-4">
            <button
              className="icon dark-mode-icon mr-4 text-2xl text-slate-400 border-none"
              onClick={toggleTheme}
              type="button"
            >
              {state.theme === "light" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineNightlight />
              )}
            </button>
          </span>
          <span className="hidden md:flex md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center">
            <Link
              href="https://github.com/asanorberg"
              className="icon text-2xl text-slate-400 hover:text-[#c9510c]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/asa-norberg-373ba4110"
              className="icon text-2xl text-slate-400 hover:text-[#0077B5]"
              target="_blank"
              rel="noopener noreferrer"
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
      </header>
    </div>
  );
}
