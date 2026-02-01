import { BottomNavBar } from "./BottomNavbar"
import { TopNavbar } from "./TopNavbar"

export const Navbar = () => {
    return (
        <div className="h-[945px] w-16 bg-[#F5F0FE] border border-amber-600 flex flex-col">
            <TopNavbar />
            <BottomNavBar />
        </div>
    )
}