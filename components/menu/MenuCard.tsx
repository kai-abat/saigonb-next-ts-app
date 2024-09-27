'use client';

import { getFallbackImagePath } from '@/utils/Helper';
import { Menu } from '@/utils/types/Props';
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
  Button as ButtonNUI
} from '@nextui-org/react';
import Image from 'next/image';
import Button from '../ui/Button';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { LiaEditSolid, LiaTrashSolid } from 'react-icons/lia';
import { useState } from 'react';
import DeleteMenuModal from './DeleteMenuModal';
import fallbackImage from '/images/saigonbrewers-fallback-loader-w400.png';
import FallbackImage from '../ui/FallbackImage';
import { GrEdit } from 'react-icons/gr';

const MenuCard = ({
  menuItem,
  isAuthenticated
}: {
  menuItem: Menu;
  isAuthenticated: boolean;
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (!menuItem || !menuItem.category) return;

  const menuDetailsLink = `/menu/${encodeURIComponent(
    menuItem.category.name
  )}/${encodeURIComponent(menuItem.name)}`;
  const deleteMessage = `Are you sure you want to delete the menu: "${menuItem.name}"`;

  return (
    <>
      <Card
        shadow='sm'
        className='  border-1 border-secondary bg-primary transition-all duration-700 hover:ring-2 hover:ring-secondary dark:bg-stone-700'
      >
        <CardHeader
          id='card-body'
          className='flex flex-none items-center justify-center overflow-visible p-0'
        >
          <div className='aspect-square w-full bg-content3'>
            <ImageUI
              isZoomed
              as={Image}
              radius='none'
              shadow='sm'
              width={400}
              height={400}
              alt={menuItem.name}
              className='aspect-square w-full object-cover '
              src={menuItem.coverPhotos.at(0)?.image}
              fallbackSrc={<FallbackImage />}
              classNames={{
                wrapper: cn('aspect-square bg-no-repeat bg-center bg-cover ')
              }}
            />
          </div>
        </CardHeader>
        <CardBody className='w-full flex-col text-small'>
          <b>{menuItem.name}</b>
          <p>{menuItem.description}</p>
        </CardBody>
        <CardFooter className=' gap-x-2'>
          <Button
            className='w-full shrink grow-[3] basis-full'
            color='secondary'
            endContent={<MdOutlineArrowForwardIos />}
            isLink
            href={menuDetailsLink}
          >
            Details
          </Button>

          {isAuthenticated && (
            <Popover
              placement='bottom'
              offset={20}
              showArrow
              radius='md'
              shouldBlockScroll
              isOpen={isPopupOpen}
              onOpenChange={open => setIsPopupOpen(open)}
            >
              <PopoverTrigger>
                <ButtonNUI
                  isIconOnly
                  radius='md'
                  variant='bordered'
                  color='secondary'
                  className='basis-max shrink grow'
                >
                  <HiOutlineDotsVertical />
                </ButtonNUI>
              </PopoverTrigger>
              <PopoverContent>
                <div className='flex flex-col gap-y-3 px-1 py-2'>
                  <Button
                    startContent={<GrEdit />}
                    variant='light'
                    className='flex justify-start'
                    color='secondary'
                    isLink
                    href={`/menu/menu-form?id=${menuItem.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    startContent={<LiaTrashSolid />}
                    variant='light'
                    color='danger'
                    className='flex justify-start'
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
