"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { useSelectedLayoutSegments } from "next/navigation";

import { menus } from "../lib/menus";
import Logo from "../public/images/kcr_logo.webp";

export default function Navbar() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  useEffect(() => {
    let navbar = document.getElementById("navbar");

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        navbar?.classList.remove("bg-none");
        navbar?.classList.add(
          "backdrop-saturate-[150%]",
          "backdrop-blur-[5px]",
          "bg-[hsla(360,100%,100%,0.33)]"
        );
      } else {
        navbar?.classList.add("bg-none");
        navbar?.classList.remove(
          "backdrop-saturate-[150%]",
          "backdrop-blur-[5px]",
          "bg-[hsla(360,100%,100%,0.33)]"
        );
      }
    }
  });

  return (
    <header className="sticky top-0">
      <nav className="transition ease-in duration-[0.3s] bg-none" id="navbar">
        <div className="flex flex-row max-w-[1280px] mx-auto justify-between w-full px-12 h-fit py-[20px] items-center">
          <div className="flex h-[50px] items-center">
            <Link href="/">
              <Image src={Logo} width={60} alt="KCR Logo" />
            </Link>
          </div>
          <div className="font-[500] text-[16px] text-gray-800">
            <ul className="flex flex-row gap-[50px]">
              {menus.map((menu) => {
                const isActive = menu.slug === selectedLayoutSegments;

                return (
                  <li key={menu.slug}>
                    <Link
                      href={`/${menu.slug}`}
                      className={clsx(
                        "from-[#2a2e31] via-[#10887c] to-[#83d1de] hover:bg-gradient-to-r hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom pb-1",
                        {
                          "": !isActive,
                          "bg-gradient-to-r bg-[length:100%_2px] bg-no-repeat bg-bottom":
                            isActive,
                        }
                      )}
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
