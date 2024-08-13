import React from "react";
import Logo from "../logo";
import Link from "next/link";
import Image from "next/image";

const DesktopNav = () => {
  //
  const linksStyles =
    "flex flex-row items-center justify-center gap-1 p-0 text-base text-color_4";
  //
  return (
    <div className="hidden xl:flex flex-col items-center justify-center min-h-16 py-0">
      <div className="w-full h-20 flex flex-row gap-12 items-center justify-between border-b border-color_1">
        <div className=" flex flex-row gap-4">
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
        </div>
        <Logo />
        <div className="flex flex-row gap-4">
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
        <Link href={"/cart"} className={linksStyles}>
          Cart(0)
        </Link>
        <Link href={"*"} className={linksStyles}>
          <Image
            src={"/icons/search.svg"}
            alt="Search icon"
            width={20}
            height={20}
            objectFit="contain"
          />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
