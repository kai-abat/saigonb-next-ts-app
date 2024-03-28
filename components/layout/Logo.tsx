import Image from "next/image";
import { Image as NextUIImage } from "@nextui-org/react";

const Logo = ({
  width = 50,
  height = 50,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <NextUIImage
      as={Image}
      src="/svg/logo.svg"
      alt="Saigon Brewers"
      className="aspect-auto dark:invert min-h-[50px] min-w-[50px] "
      width={width}
      height={height}
    />
  );
};
export default Logo;
