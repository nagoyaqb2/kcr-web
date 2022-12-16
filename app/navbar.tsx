"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import { useRouter } from "next/router";

import Logo from "../public/images/kcr_logo.webp";

import { menus } from "../lib/menus";

export default function Navbar() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className="transition ease-in duration-[0.3s] bg-none w-full h-[80px] bg-black"
        id="navbar"
      >
        <div className="flex flex-row mx-auto justify-between px-12 w-full h-auto py-[8px] items-center">
          <div className="box-border block w-5 h-5"></div>
          <div className="box-border items-center block w-auto h-auto">
            <Link href="/">
              <Image src={Logo} width={50} alt="KCR Logo" />
            </Link>
          </div>
          <div
            role="button"
            onClick={() => {
              handleNavMenuClick();
            }}
            className="w-5 h-5"
          >
            {/* //TODO: Make the hamburger button animated, and prettier  */}
            <svg>
              {isNavOpen ? (
                <g
                  className="absolute z-50 close"
                  fill="yellow"
                  stroke="yellow"
                >
                  <rect width="30" height="3" />
                  <rect width="30" height="3" x="6" y="12" />
                </g>
              ) : (
                <g className="z-50 open" fill="yellow" stroke="yellow">
                  <rect width="30" height="3" />
                  <rect width="30" height="3" x="6" y="12" />
                  <rect width="30" height="3" y="24" />
                </g>
              )}
            </svg>
          </div>
        </div>
      </nav>
      {isNavOpen && (
        <div className="absolute top-[80px] left-0 z-0 w-screen h-[calc(100vh-50px)] bg-black">
          <div className="flex flex-col w-full mt-[20px] gap-[20px] px-[70px]">
            {menus.map((menu) => (
              <Link
                key={menu.slug}
                href={menu.slug}
                className="text-white font-extrabold uppercase text-[1.5rem] md:text-[2rem] lg:text-[3rem] leading-[1.2] tracking-tight"
                onClick={() => setIsNavOpen(false)}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
