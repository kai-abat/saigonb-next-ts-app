'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react';
import Image from 'next/image';

const MediaPreviewModal = ({
  media,
  type,
  isOpen,
  onOpenChange
}: {
  media: string;
  type: 'image' | 'video';
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log('MediaPreviewModal', isOpen);
  // if (isOpenModal) {
  //   onOpen();
  // }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='center'
        size='xl'
        className='z-50 bg-primary-50'
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Preview</ModalHeader>
              <ModalBody className=''>
                {type === 'image' && (
                  <div className=' flex items-center justify-center'>
                    <Image
                      src={media}
                      alt='media previewer'
                      width={500}
                      height={500}
                      className='aspect-square h-full rounded-md object-cover'
                    />
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default MediaPreviewModal;
