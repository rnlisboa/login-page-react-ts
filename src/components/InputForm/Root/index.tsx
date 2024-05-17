import { ReactNode } from "react";

interface RootProps {
    children: ReactNode;
}

export function Root({ children }: RootProps) {
    return <div className='flex w-[385px] flex-col gap-y-2'>{children}</div>;
}