"use client";

import { Button, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { VscNewFile } from "react-icons/vsc";

const NewMenuButton = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end items-center ">
      <Button
        color="secondary"
        size="lg"
        className="max-w-[300px] w-full"
        startContent={<VscNewFile />}
        href="/menu/new-menu"
        as={Link}
      >
        New Menu
      </Button>
    </div>
  );
};
export default NewMenuButton;
