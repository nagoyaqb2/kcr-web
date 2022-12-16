"use client";

import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";

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
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        navbar?.classList.remove("bg-none");
        navbar?.classList.add("bg-[#000]");
      } else {
        navbar?.classList.add("bg-none");
        navbar?.classList.remove("bg-[#000]");
      }
    }
  });

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className="transition ease-in duration-[0.3s] bg-none w-full"
        id="navbar"
      >
        <div className="flex flex-row mx-auto justify-between px-12 w-full h-auto py-[8px] items-center">
          <div className="box-border block w-5 h-5"></div>
          <div className="box-border items-center block w-auto h-auto">
            <Link href="/">
              <Image src={Logo} width={50} alt="KCR Logo" />
            </Link>
          </div>
          <div className="block font-[500] text-[16px] text-[#ebebeb] box-border">
            <div className="w-5 h-5"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
