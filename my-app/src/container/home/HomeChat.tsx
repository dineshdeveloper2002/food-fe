import { Grid, TextField, Typography } from "@mui/material"

export const HomeChat = () => {
    return (
        <div className={`bg-gradient-to-br from-[#CAEBF5] via-[#B0E0E6] to-[#F5CAEB] flex-1 ml-2 mr-2 mt-2 mb-0 rounded-[20px_20px_0px_0px] h-[100vh]`}>
            <div className="text-end">
                Start your trial for $0
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-[#4CB4FF] via-[#5A6BFF] to-[#8A2BE2] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(138,43,226,0.4)] text-center">
                What will you design today?
            </div>

            <div className="flex justify-center">
                <TextField placeholder="Ask your AI companion" className="w-[70%]" />
            </div>
        </div>
    )
}