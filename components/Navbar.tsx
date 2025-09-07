"use client";
import Link from "next/link";
import Image from "next/image";
import Buddy from "@/public/image.psd.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-mantle/70 backdrop-blur-md text-text px-6 py-1 h-14 flex justify-between items-center z-50">
      {/* <h1 className="text-xl font-bold text-mauve">My Site</h1> */}
      <Image
        src={Buddy}
        alt="Logo"
        className="w-8 h-8 object-contain"
      />
      <div className="flex gap-6">
        <Link href="#home" className="hover:text-lavender transition">
          Home
        </Link>
        <Link href="#skills" className="hover:text-peach transition">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-peach transition">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-green transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}