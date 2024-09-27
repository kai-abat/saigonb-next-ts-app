import { Button } from '@nextui-org/react';
import { GrEdit } from 'react-icons/gr';
import { TfiClose } from 'react-icons/tfi';

const PostCTA = () => {
  return (
    <>
      <Button
        isIconOnly
        size='lg'
        className='w-0 rounded-full hover:bg-stone-400'
        color='secondary'
        variant='light'
      >
        <GrEdit />
      </Button>
      <Button
        isIconOnly
        size='lg'
        className='w-0 rounded-full hover:bg-stone-400'
        color='secondary'
        variant='light'
      >
        <TfiClose />
      </Button>
    </>
  );
};
export default PostCTA;
