'use client';
import { State, deleteMenuAction } from '@/utils/actions/menuActions';
import { Menu } from '@/utils/types/Props';
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import Button from '../ui/Button';
import SubmitButton from '../form/SubmitButton';

function DeleteMenuModal({
  isOpen,
  onOpenChange,
  deleteMessage,
  menuItem
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  deleteMessage: string;
  menuItem: Menu;
}) {
  const [state, formAction] = useFormState<State, FormData>(
    deleteMenuAction,
    null
  );

  // Show the return value/state of server action newMenuAction
  useEffect(() => {
    if (!state) {
      return;
    }
    // In case our form action returns `error` we can now `setError`s
    if (state.status === 'error') {
      console.log('ERRORS!:', state.errors);
    }
    if (state.status === 'success') {
      alert(JSON.stringify(state));
    }
  }, [state]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton={true}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Confirm</ModalHeader>
            <form action={formAction}>
              <ModalBody>
                <p>{deleteMessage}</p>
                <Input
                  name='menu-id'
                  type='text'
                  isReadOnly
                  value={menuItem.id.toString()}
                  className='hidden'
                />
              </ModalBody>
              <ModalFooter>
                <SubmitButton
                  color='default'
                  label='No'
                  labelLoading=''
                  onPressHandler={onClose}
                />
                <SubmitButton
                  color='danger'
                  label='Yes'
                  labelLoading=''
                  modalCloseAfterActionHandler={() => {
                    onClose();
                  }}
                />
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default DeleteMenuModal;
