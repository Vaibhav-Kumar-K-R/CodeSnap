'use client';
import Image from 'next/image';
import favicon from "@/app/icon.png"

export default function Header() {
  return (
    <header className="fixed top-0 w-full p-4 backdrop-blur-md bg-transparent z-40">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image  src={favicon} alt='Favicon'/>
          <span className="dark:text-white text-black font-semibold">
            Code Snap
          </span>
        </div>
      </nav>
    </header>
  );
}
