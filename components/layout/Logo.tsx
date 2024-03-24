import Image from "next/image";
import { Image as NextUIImage } from "@nextui-org/react";
import Link from "next/link";
import { AppProps } from "@/utils/Props";
import Brand from "./Brand";

const Logo = ({ showBrand = true }: AppProps) => {
  return (
    <Link href="/" className="flex items-center normal-case gap-x-2">
      <NextUIImage
        as={Image}
        src="/svg/logo.svg"
        alt="Saigon Brewers"
        className="aspect-aut dark:invert min-h-[50px] min-w-[50px] "
        width={50}
        height={50}
      />
      {showBrand && <Brand className=" text-left text-nowrap" />}
    </Link>
  );
};
export default Logo;
