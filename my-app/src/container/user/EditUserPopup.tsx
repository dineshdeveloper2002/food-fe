import { Box, Grid, TextField } from "@mui/material"

export const EditUserPopup = () => {
    return (
        <Box sx={{ width: '100px' }}>
            <Grid>
                Edit User details
            </Grid>
            <Grid>
                <TextField autoComplete="off"
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                />
                <TextField autoComplete="off"
                    label="role"
                    type="text"
                    fullWidth
                    margin="normal"
                />
            </Grid>
        </Box>
    )
}