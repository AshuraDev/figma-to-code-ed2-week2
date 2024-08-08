import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="relative sm:w-36 h-9 w-28">
      <Image src={"/images/Logo.png"} alt="Logo" objectFit="contain" fill />
    </Link>
  );
};

export default Logo;
