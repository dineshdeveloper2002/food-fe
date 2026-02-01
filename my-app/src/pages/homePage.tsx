import { HomeChat } from "@container/container/home/HomeChat";
import { useEffect } from "react"

export default function HomePage() {

    useEffect(() => {
        console.log("Home page arrived ");
    })
    return (
        <>
            <HomeChat />
        </>
    )
}