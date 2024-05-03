import { ComponentProps } from '@/utils/types/Props';

const Title = ({ children, capitalize }: ComponentProps) => {
  return (
    <h1
      className={`text-xl font-bold text-secondary drop-shadow-sm dark:text-default-foreground sm:text-2xl lg:text-3xl  ${
        capitalize && 'capitalize'
      }`}
    >
      {children}
    </h1>
  );
};
export default Title;
