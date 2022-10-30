"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/kcr_logo_text.webp";

export default function Navbar() {
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
          "backdrop-blur-[5px]"
        );
      }
    }

    console.log(navbar);
  });

  return (
    <header className="sticky top-0">
      <nav
        className="flex flex-row items-center bg-none justify-between w-full px-12 h-[80px] py-[10px] bg-[hsla(0,0%,100%,.8)]"
        id="navbar"
      >
        <div className="flex h-[50px] items-center">
          <Link href="/">
            <Image src={Logo} alt="KCR Logo" />
          </Link>
        </div>
        <div className="font-[500] text-[16px]">
          <ul className="flex flex-row gap-[50px]">
            <li>
              <Link
                className="hover:bg-gradient-to-r from-[#2a2e31] via-[#10887c] to-[#83d1de] hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom"
                href="drivers"
              >
                Drivers
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-r from-[#2a2e31] via-[#10887c] to-[#83d1de] hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom"
                href="trophies"
              >
                Trophy Room
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-r from-[#2a2e31] via-[#10887c] to-[#83d1de] hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom"
                href="about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-r from-[#2a2e31] via-[#10887c] to-[#83d1de] hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom"
                href="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
