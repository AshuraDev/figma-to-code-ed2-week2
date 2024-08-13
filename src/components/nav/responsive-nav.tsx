"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Logo from "../logo";
import Link from "next/link";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const linksStyles =
    "flex flex-row items-center justify-center gap-1 p-0 text-lg text-color_4";

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`720px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-0 xl:hidden">
      <div className="flex flex-row gap-12 items-center justify-between w-full h-16 border-b border-color_1">
        {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <Image
              src={"/icons/cross.svg"}
              alt="Close Menu"
              width={30}
              height={30}
              objectFit="contain"
            />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <Image
              src={"/icons/menu.svg"}
              alt="Hamburger Menu"
              width={30}
              height={30}
              objectFit="contain"
            />
          </button>
        )}
        <Logo />
        <div className="flex flex-row gap-3 items-center justify-center">
          <Image
            src={"/icons/search.svg"}
            alt="Search icon"
            width={20}
            height={20}
            objectFit="contain"
          />
          <Link href={'/cart'}>
          <Image
            src={"/icons/cart.svg"}
            alt="Cart icon"
            width={20}
            height={20}
            objectFit="contain"
          />
          </Link>
        </div>
      </div>
      <div
        ref={contentRef}
        className={`w-full flex flex-col items-center justify-center gap-10 overflow-hidden transition-[max-height] duration-500 ease-in-out`}
        style={{ maxHeight }}
      >
        <div className="flex flex-col justify-center items-center p-0 gap-3">
          <Link href={"*"} className={linksStyles}>
            Men
          </Link>
          <Link href={"*"} className={linksStyles}>
            Women
          </Link>
          <Link href={"*"} className={linksStyles}>
            Kids
          </Link>
          <Link href={"*"} className={linksStyles}>
            Collection
          </Link>
          <Link href={"*"} className={linksStyles}>
            Shop
          </Link>
          <Link href={"*"} className={linksStyles}>
            About Us
          </Link>
          <Link href={"*"} className={linksStyles}>
            <Image
              src={"/icons/user.svg"}
              alt="user"
              width={18}
              height={18}
              objectFit="contain"
            />
            Account
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center p-0 gap-2">
          <Link href={"*"} className={linksStyles}>
            FAQ
          </Link>
          <Link href={"*"} className={linksStyles}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
