"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const extractPathOnly = (path: string): string => {
  if (path.match(/\?/)) {
    return path.split("?")[0];
  }
  return path;
};

const extractIndividualPaths = (asPath: string) => {
  asPath = decodeURIComponent(asPath);
  if (asPath === "/") {
    return [{ name: "home", to: asPath }];
  } else {
    const paths = asPath.split("/");
    return paths.map((path, index) => {
      const name = path === "" ? "home" : path;
      let to;

      if (index === 0) {
        to = "/";
      } else {
        to = paths.slice(0, index + 1).join("/");
      }
      // console.log("BreadCrumbs MAP:", path, index, asPath);
      return { name, to };
    });
  }
};

const BreadCrumbs = () => {
  const path = usePathname();
  const crumbs = extractIndividualPaths(path);

  // console.log("BreadCrumbs", router);

  return (
    <div className="flex flex-col flex-wrap gap-4 ">
      <Breadcrumbs
        underline="hover"
        className=" text-2xl font-semibold"
        color="foreground"
        variant="solid"
      >
        {crumbs.map((crumb) => (
          <BreadcrumbItem
            key={crumb.name}
            href={crumb.to}
            className=" uppercase"
            size="lg"
          >
            {crumb.name}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumbs;
