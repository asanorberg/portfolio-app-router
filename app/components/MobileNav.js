"use client";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="w-full">
      <span className="flex flex-col fixed z-0 right-2 top-4 md:hidden space-y-2">
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
  );
}
