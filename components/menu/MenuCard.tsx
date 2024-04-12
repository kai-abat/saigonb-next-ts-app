"use client";

import { getFallbackImagePath } from "@/utils/Helper";
import { ComponentProps, Menu } from "@/utils/types/Props";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image as ImageUI,
  Popover,
  PopoverContent,
  PopoverTrigger,
  cn,
  useDisclosure,
  Button as ButtonNUI,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import Button from "../ui/Button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LiaEditSolid, LiaTrashSolid } from "react-icons/lia";
import { useState } from "react";
import DeleteMenuModal from "./DeleteMenuModal";

const MenuCard = ({
  menuItem,
  isAuthenticated,
}: {
  menuItem: Menu;
  isAuthenticated: boolean;
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (!menuItem || !menuItem.category) return;

  const menuDetailsLink = `/menu/${menuItem.category.name}/${menuItem.name}`;
  const deleteMessage = `Are you sure you want to delete the menu: "${menuItem.name}"`;

  return (
    <>
      <Card
        shadow="sm"
        className="  bg-primary hover:ring-2 transition-all duration-700 hover:ring-secondary"
      >
        <CardHeader
          id="card-body"
          className="overflow-visible p-0 flex justify-center items-center flex-none"
        >
          <div className="w-full aspect-square bg-red-400">
            <ImageUI
              isZoomed
              as={Image}
              radius="none"
              shadow="sm"
              width={400}
              height={400}
              alt={menuItem.name}
              className="w-full aspect-square object-cover "
              src={menuItem.coverPhotos.at(0)?.image}
              fallbackSrc={getFallbackImagePath()}
              classNames={{
                wrapper: cn("aspect-square bg-no-repeat bg-center bg-cover "),
              }}
            />
          </div>
        </CardHeader>
        <CardBody className="text-small flex-col w-full">
          <b>{menuItem.name}</b>
          <p>{menuItem.description}</p>
        </CardBody>
        <CardFooter className=" gap-x-2">
          <Button
            className="w-full"
            color="secondary"
            endContent={<MdOutlineArrowForwardIos />}
            isLink
            href={menuDetailsLink}
          >
            Details
          </Button>

          {isAuthenticated && (
            <Popover
              placement="bottom"
              offset={20}
              showArrow
              radius="md"
              shouldBlockScroll
              isOpen={isPopupOpen}
              onOpenChange={(open) => setIsPopupOpen(open)}
            >
              <PopoverTrigger>
                <ButtonNUI
                  isIconOnly
                  radius="md"
                  variant="bordered"
                  color="secondary"
                >
                  <HiOutlineDotsVertical />
                </ButtonNUI>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2 flex flex-col gap-y-3">
                  <Button
                    startContent={<LiaEditSolid />}
                    variant="light"
                    className="flex justify-start"
                    color="secondary"
                  >
                    Edit
                  </Button>
                  <Button
                    startContent={<LiaTrashSolid />}
                    variant="light"
                    color="danger"
                    className="flex justify-start"
                    onPress={() => {
                      setIsPopupOpen(false);
                      onOpen();
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </CardFooter>
      </Card>
      {isAuthenticated && (
        <DeleteMenuModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          deleteMessage={deleteMessage}
          menuItem={menuItem}
        />
      )}
    </>
  );
};
export default MenuCard;
