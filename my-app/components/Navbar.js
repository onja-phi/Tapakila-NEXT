"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[hsl(0,75%,76%)] to-[hsl(0,55%,56%)] dark:from-gray-900 dark:to-gray-700 shadow-md">
      <div className="flex justify-between items-center p-4 container mx-auto">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="TAPAKILA Logo"
            width={48} // Taille en pixels (équivalent à w-12)
            height={48} // Taille en pixels (équivalent à h-12)
            className="rounded-full -ml-6"
          />
          <span className="text-2xl font-bold text-white">TAPAKILA</span>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/">
            <Button variant="link" className="text-white">
              HOME
            </Button>
          </Link>
          <Link href="/event">
            <Button variant="link" className="text-white">
              EVENT
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="link" className="text-white">
              CONTACT
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant="link"
              className=" bg-red-800 rounded-full text-white hover:bg-red-600"
            >
              SE CONNECTER
            </Button>
          </Link>
        </div>

        <button
          onClick={toggleTheme}
          className="text-white text-2xl -mr-20 transition-all duration-300"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <button
          className="text-white -mr-3 text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-50% bg-[hsl(0,75%,89%)] dark:bg-gray-800 text-black dark:text-white shadow-md lg:w-auto lg:right-4 lg:top-auto lg:bg-[hsl(0,75%,89%)] dark:lg:bg-gray-800 lg:shadow-none">
          <ul className="space-y-4 p-4 lg:space-y-0 lg:space-x-4 lg:p-0">
            <li className="lg:hidden">
              <Link href="/">
                <Button variant="link" className="w-full text-left">
                  HOME
                </Button>
              </Link>
            </li>
            <li className="lg:hidden">
              <Link href="/event">
                <Button variant="link" className="w-full text-left">
                  EVENT
                </Button>
              </Link>
            </li>
            <li className="lg:hidden">
              <Link href="/connecter">
                <Button variant="link" className="w-full text-left">
                  SE CONNECTER
                </Button>
              </Link>
            </li>
            <li className="lg:hidden">
              <Link href="/contact">
                <Button variant="link" className="w-full text-left">
                  CONTACT
                </Button>
              </Link>
            </li>

            <li>
              <Link href="/about" passHref>
                <Button
                  variant="link"
                  className="w-full text-left hover:text-blue-600 focus:outline-none"
                >
                  ABOUT
                </Button>
              </Link>
            </li>

            <li>
              <Link href="/organize">
                <Button variant="link" className="w-full text-left">
                  DEVENIR ORGANISATEUR
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/politique">
                <Button variant="link" className="w-full text-left">
                  POLITIQUE DE CONFIDENTIALITE
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
