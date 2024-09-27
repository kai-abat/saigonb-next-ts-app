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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Preview</ModalHeader>
              <ModalBody>
                {type === 'image' && (
                  <Image
                    src={media}
                    alt='media previewer'
                    width={500}
                    height={500}
                  />
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
