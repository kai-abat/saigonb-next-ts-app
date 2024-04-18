import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className=' mt-4 h-screen'>
      <div className='flex w-full flex-col items-center justify-center gap-y-6 bg-primary/60'>
        <Title>Page Not Found</Title>
        <p className=' text-lg'>Something went wrong!</p>
        <p className=' text-lg'>Could not find requested resource!</p>

        <Button as={Link} href='/' color='secondary'>
          Return Home
        </Button>
      </div>
    </Container>
  );
}
