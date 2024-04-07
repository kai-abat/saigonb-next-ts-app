"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { VscNewFile } from "react-icons/vsc";

const AddMenuButton = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end items-center ">
      <Button
        color="secondary"
        size="lg"
        className="max-w-[300px] w-full"
        startContent={<VscNewFile />}
        onPress={() => router.push("/menu/new-menu")}
      >
        New Menu
      </Button>
    </div>
  );
};
export default AddMenuButton;
