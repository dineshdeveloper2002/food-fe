import { Box, TextField } from "@mui/material"
import { forwardRef } from "react"

export const AddUser = () => {
    return (
        <Box
            component="form"
            autoComplete="off"
            className="border border-amber-700 "
        >
            <TextField id="outlined-basic" label="Name" />
            <TextField id="outlined-basic" label="Role" />
        </Box>
    )
}