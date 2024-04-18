import { ComponentProps } from '@/utils/types/Props';

const Container = ({ children, align, className }: ComponentProps) => {
  return (
    // 'flex w-[90vw] min-w-[300px] max-w-[1024px] flex-col gap-y-4 bg-red-500 sm:w-[80vw]'
    <section
      className={`flex w-full flex-col justify-start gap-y-4 *:max-w-[95vw] *:shrink *:grow *:sm:max-w-[80vw]
      ${align === 'left' && 'items-start'}
      ${align === 'right' && 'items-end'}
      ${(!align || align === 'center') && 'items-center'}
      ${typeof className === 'string' && className}
    
    `}
    >
      {children}
    </section>
  );
};
export default Container;
