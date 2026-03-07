"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Analytics", href: "#analytics" },
];

interface NavbarProps {
  position?: "fixed" | "static";
}

export default function Navbar({ position = "fixed" }: NavbarProps) {
  const [isOverHero, setIsOverHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isFixed = position === "fixed";

  useEffect(() => {
    const hero = document.getElementById("hero");

    // Jika tidak ada hero (misal halaman QR, AI, dll)
    if (!hero) {
      setIsOverHero(false);
      return;
    }

    const handleScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsOverHero(heroBottom > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    if (menuOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={isFixed ? "" : "relative z-40"}>
      {/* ================= HEADER ================= */}
      <header
        className={`${isFixed ? "fixed top-0 left-0 right-0" : "relative"
          } z-40 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]`}
      >
        <div
          className={`w-full transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${isOverHero ? "rounded-t-[32px]" : ""
            } ${isOverHero
              ? "bg-transparent w-full"
              : "bg-[#F3F3F3] backdrop-blur-md mx-auto max-w-[1800px]"
            }`}
        >
          <nav className="flex items-center justify-between px-4 py-3 w-full min-w-0">
            {/* LOGO */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src={
                  isOverHero ? "/img/ternaqin.svg" : "/img/Ternaqin-logo.svg"
                }
                alt="TernaQin logo"
                width={285}
                height={60}
                priority
                className="w-[160px] sm:w-[190px] lg:w-[240px] 2xl:w-[285px]"
              />
            </Link>

            {/* ===== DESKTOP NAV (ONLY HERO MODE) ===== */}
            {isOverHero && (
              <>
                <ul className="hidden xl:flex items-center gap-8 xl:gap-14 2xl:gap-[80px] font-sf animate-in fade-in duration-300">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-lg xl:text-xl 2xl:text-[28px] font-medium text-white/80 hover:text-white transition"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="hidden xl:flex items-center gap-[2px] animate-in fade-in duration-300">
                  <a
                    href="#contact"
                    className="inline-flex h-[56px] w-[190px] items-center justify-center rounded-xl bg-[#1F4941] text-xl font-medium text-white"
                  >
                    Contact Us
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#1F4941]"
                  >
                    <Image
                      src="/img/arrow-right-white.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </>
            )}

            {/* ===== HAMBURGER (ONLY WHITE MODE) ===== */}
            {!isOverHero && (
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="relative w-8 h-8 xl:block animate-in fade-in duration-300"
              >
                {/* HAMBURGER */}
                <div
                  className={`
                    absolute inset-0 flex flex-col justify-center items-center space-y-1.5
                    transition-all duration-300 ease-in-out
                    ${menuOpen
                      ? "opacity-0 scale-100 rotate-90"
                      : "opacity-100 scale-150 rotate-0"
                    }
                  `}
                >
                  <Image
                    src="/img/hamburger-menu.svg"
                    alt="open menu"
                    width={600}
                    height={600}
                  />
                </div>

                {/* CLOSE ICON */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${menuOpen
                      ? "opacity-100 scale-150 rotate-0"
                      : "opacity-0 scale-100 -rotate-90"
                    }
                  `}
                >
                  <Image
                    src="/img/close-icon.svg"
                    alt="Close menu"
                    width={100}
                    height={100}
                  />
                </div>
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* ================= EXPANDING FULL MENU ================= */}
      <div
        className={`
    ${isFixed ? "fixed" : "absolute"} left-0 right-0
    top-[72px]
    z-30
    origin-top
    transform
    transition-transform duration-700
    ease-[cubic-bezier(.22,1,.36,1)]
    ${menuOpen ? "scale-y-100" : "scale-y-0"}
  `}
      >
        <div className="w-full bg-[#F3F3F3] rounded-b-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          <div className="min-h-[calc(100vh-72px-48px)] px-8 pt-4">
            <ul
              className={`
          flex flex-col text-[26px] font-medium text-black
          transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${menuOpen
                  ? "opacity-100 translate-y-0 delay-700"
                  : "opacity-0 -translate-y-4"
                }
        `}
            >
              {[
                "About",
                "Features",
                "Services",
                "Process",
                "Analytics",
                "Pricing",
                "FAQs",
                "Testimonials",
                "Contact",
              ].map((item, index) => (
                <li
                  key={item}
                  style={{
                    transitionDelay: menuOpen ? `${550 + index * 50}ms` : "0ms",
                  }}
                  className={`
              transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)]
              ${menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }
            `}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4 hover:opacity-60 transition-all duration-300"
                  >
                    <span>{item}</span>
                    <span className="flex items-center opacity-40">
                      <Image
                        src="/img/arrow-right.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
