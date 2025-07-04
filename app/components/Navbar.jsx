"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
  
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        ticking = false;
        return; // Don't do anything if the scroll is too small
      }
  
      if (currentScrollY > lastScrollY) {
        setHidden(true); // Scrolling down
      } else {
        setHidden(false); // Scrolling up
      }
  
      lastScrollY = currentScrollY;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);  

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Link href="/" className="text-xl font-bold">
          <img
            src="/images/logo.png"
            alt="Studio Ganda Logo"
            className="h-10 w-10 rounded-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Hamburger Menu button */}
        <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-6 h-6 flex items-center justify-center z-50 group"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>
        </div>
      </header>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed text-black inset-0 z-40 bg-neutral-100 flex flex-col items-center justify-evenly px-4 py-12 sm:py-20"
          >
            <nav className="flex flex-col gap-12 text-center">
              <Link href="/about" onClick={handleClose}>
                <motion.span className="text-3xl md:text-5xl font-light hover:opacity-60 transition">
                  About
                </motion.span>
              </Link>
              <Link href="/projects" onClick={handleClose}>
                <motion.span className="text-3xl md:text-5xl font-light hover:opacity-60 transition">
                  Projects
                </motion.span>
              </Link>
              <Link href="/contact" onClick={handleClose}>
                <motion.span className="text-3xl md:text-5xl font-light hover:opacity-60 transition">
                  Contact
                </motion.span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
