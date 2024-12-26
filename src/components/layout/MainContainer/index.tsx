import { cn } from '@/lib/utils';
import { HTMLProps, PropsWithChildren } from 'react';

interface MainContainerProps {
  className?: HTMLProps<HTMLElement>['className'];
}

export default function MainContainer({ children, className }: PropsWithChildren<MainContainerProps>) {
  return <div className={cn('container mx-auto border-t px-6 pt-6', className)}>{children}</div>;
}
