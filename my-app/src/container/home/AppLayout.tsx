import { ReactNode } from "react"
import { Navbar } from "./Navbar.tsx/NavBar"
import { useAppSelector } from "@container/store/storetypedhooks";
import { openbar } from "@container/store/home/HomeStoreSelectors";
import { ExpandBarWrapper } from "./Navbar.tsx/ExpandBarWrapper";

interface AppLayoutProps {
    children?: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {

    const open = useAppSelector(openbar);
    return (
        <div className="flex w-full h-[100dvh]">
            {/* Sidebar */}
            <div className={`${open ? "w-[336px]" : "w-16"} h-full bg-[#f0f4fd] flex flex-row flex-shrink-0`} >
                <Navbar />
                {open && <ExpandBarWrapper />}
            </div >
            {/* Main Content */}
            <div className="flex-1 h-full overflow-auto">
                {children}
            </div>
        </div>
    )
}
