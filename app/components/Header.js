"use client";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "../context/ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { state, toggleTheme } = useTheme();

  return (
    // <-------- Nav menu -------->
    <header className="flex items-center justify-between p-4 mb-10">
      <nav>
        <div className="flex items-center whitespace-nowrap md:space-x-16 space-x-8">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/projects">
            Projects
          </Link>
          <Link className="nav-link" href="/about">
            About me
          </Link>
        </div>
      </nav>

      {/* // <-------- Icons --------> */}
      <div className="flex items-center">
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
        <span className=" space-x-6">
          <Link
            href="#"
            className="icon text-2xl text-slate-400 hover:text-[#c9510c]"
          >
            <FaGithub />
          </Link>
          <Link
            href="#"
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
    </header>
  );
}
