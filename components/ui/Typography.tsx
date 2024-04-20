import React, { ElementType } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'p-xs' | 'span';

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
  'p-xs': 'p',
  span: 'span'
};

const sizes: Record<Variant, string> = {
  h1: 'text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  h2: 'text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-md font-bold sm:text-xl md:text-2xl lg:text-3xl',
  h5: 'text-md font-bold sm:text-lg md:text-xl lg:text-2xl',
  p: 'text-sm sm:text-base',
  'p-xs': 'text-xs sm:text-sm',
  span: 'text-sm sm:text-xs'
};

// const sizes: Record<Variant, string> = {
//   h1: 'font-bold ~text-3xl/6xl ',
//   h2: 'font-bold ~text-2xl/5xl ',
//   h3: 'font-bold ~text-xl/4xl ',
//   h4: 'font-bold ~text-lg/3xl ',
//   h5: 'font-bold ~text-md/2xl ',
//   p: 'text-sm sm:text-base',
//   'p-xs': 'text-xs sm:text-sm',
//   span: 'text-sm sm:text-xs'
// };

const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  <p className='text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl'></p>;

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

export default Typography;
