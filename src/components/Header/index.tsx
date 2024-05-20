import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
    classes?: string[],
}

function Header({ children, classes }: HeaderProps) {
    return (<header
        className={`flex justify-end items-center px-6 bg-white w-[100%] h-[70px] ${classes ? classes.join(' ') : ''}`}>
        {children}
    </header>)
}

export default Header;