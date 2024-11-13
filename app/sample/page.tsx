'use client';

import ButtonSignIn from '@/components/ui/ButtonSignIn';
import ButtonSignOut from '@/components/ui/ButtonSignOut';

const SamplePage = () => {
  return (
    <section>
      <h1>SamplePage</h1>
      <ButtonSignIn showLabel={true} />
      <ButtonSignOut showLabel={true} />
    </section>
  );
};
export default SamplePage;
