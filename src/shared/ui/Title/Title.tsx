import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
  isError?: boolean;
}

export default function Title({ variant, children, className, isError, ...props }: Props) {
  const Tag = variant;
  return (
    <Tag
      className={`${className} mb-8 text-3xl font-bold sm:text-6xl lg:text-7xl ${isError ? 'text-red-500 dark:text-red-500' : 'text-black dark:text-white'}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
