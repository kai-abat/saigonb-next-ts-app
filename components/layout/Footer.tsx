import Link from "next/link";
import Brand from "./Brand";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = `Copyright © ${year} Saigon Brewers. All rights reserved.`;
  return (
    <div className="bg-primary gap-10 flex flex-col sm:flex-row justify-center items-center py-6 px-3 sm:justify-between">
      <Logo />
      <div className="flex flex-wrap gap-x-8 justify-center items-center">
        <p>{copyright}</p>
        <p>
          <Link href="/brand" className="hover:text-stone-300 transition-all">
            Trademark Policy
          </Link>
        </p>
      </div>

      <div className=" text-center sm:text-right">
        <Brand />
        <p>More Coffee, More Progress</p>
        <p>Quality, Traceability, Sustainability</p>
      </div>
    </div>
  );
};
export default Footer;
