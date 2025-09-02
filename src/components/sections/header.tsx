"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-primary-grey sticky top-0 z-50 w-full transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" style={{background:'white',borderRadius:'25px'}}>
             <Image src="/assest/images/logo.png" alt="Logo" width={100} height={100} />
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav>
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                        href={item.href}
                        className={cn(
                          "nav-text transition-colors hover:text-accent-green",
                          pathname === item.href ? "text-accent-green" : "text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:block btn-text bg-accent-gre text-primary-org font-medium py-3 px-6 rounded-full transition-all hover:bg-white"
            >
              GET IN TOUCH
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-primary-dark pt-20">
          <nav className="flex flex-col items-center gap-8 pt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-text text-xl transition-colors",
                  pathname === item.href ? "text-accent-green" : "text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 btn-text bg-accent-gre text-primary-org font-medium py-3 px-8 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      )}
    </header>
  );  
};

export default Header;