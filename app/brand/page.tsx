import Brand from "@/components/layout/Brand";
import Logo from "@/components/layout/Logo";
import { Divider } from "@nextui-org/react";

const BrandPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-3xl text-primary">Brand</p>
        <p className="text-2xl">
          Saigon Brewers brand assets and usage guidelines
        </p>
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-3xl text-primary">
          Trademark User Agreement
        </p>
        <p className="text-2xl">
          The Saigon Brewers name and logos are trademarks of Saigon Brewers
          Inc. Team.
        </p>

        <p className="text-2xl">
          You may not use the Saigon Brewers name or logos in any way that could
          mistakenly imply any official connection with or endorsement of Saigon
          Brewers Inc. Team. Any use of the Saigon Brewers name or logos in a
          manner that could cause customer confusion is not permitted.
        </p>

        <p className="text-2xl">
          This includes naming a product or service in a way that emphasizes the
          Saigon Brewers brand, like “Saigon Brewers Themes” or “Saigon Brewers
          Studio”.
        </p>

        <p className="text-2xl">
          Additionally, you may not use our trademarks for t-shirts, stickers,
          or other merchandise without explicit written consent.
        </p>
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-3xl text-primary">Assets</p>
        <p className="text-2xl">
          These assets are provided for use in situations like articles and
          video tutorials. They should not be used in any way that could be
          confusing for customers or imply any affiliation with Saigon Brewers
          Inc. Team.
        </p>
        <p className="font-bold text-3xl text-primary">Brand and Logo</p>
        <Logo />
      </div>
    </div>
  );
};
export default BrandPage;
