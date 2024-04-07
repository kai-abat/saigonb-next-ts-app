import { ComponentProps } from "@/utils/types/Props";
import Link from "next/link";
import Logo from "./Logo";
import Brand from "./Brand";

const LogoHeader = ({ showBrand = true }: ComponentProps) => {
  return (
    <Link href="/" className="flex items-center normal-case gap-x-2">
      <Logo />
      {showBrand && <Brand className=" text-left text-nowrap" />}
    </Link>
  );
};
export default LogoHeader;
