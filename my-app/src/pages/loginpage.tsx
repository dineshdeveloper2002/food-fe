import { password, username, status } from "@container/store/login/LoginStoreSelectors";
import { setUserName, setUserPassword } from "@container/store/login/LoginStoreSlice";
import { login } from "@container/store/login/LoginStoreThunk";
import { useAppDispatch, useAppSelector } from "@container/store/storetypedhooks";
import { Box, Card, CardContent, TextField, Button, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const selectUsername = useAppSelector(username);
    const selectPassword = useAppSelector(password);
    const selectloginStatus = useAppSelector(status);
    const [isempty, setEmpty] = useState<boolean>(false);

    const obj: any = {
        username: selectUsername,
        password: selectPassword
    }
    console.log("component re-renderd");

    //call thunk for clicking login
    const handleNavigation = () => {
        dispatch(login(obj));
        validateUsername();
        if (selectloginStatus === true) {
            navigate('/home')
        }
        else {
            console.log("Invalid username and passsword")
        }
    }

    const validateUsername = () => {
        if (selectUsername.trim() === "") {
            setEmpty(true)
        }
        else {
            setEmpty(false)
        }
    }

    useEffect(() => {
        validateUsername();

    }, [selectUsername, selectPassword])

    return (
        <div className="w-full flex flex-row">
            <Box sx={{ height: "100vh", display: "flex", bgcolor: "#f5f5f5" }}>
                <Card sx={{ p: 2, borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h5" align="center" sx={{ mb: 3 }}>
                            Login
                        </Typography>

                        <TextField autoComplete="off"
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            onChange={(e) => dispatch(setUserName(e.target.value))}
                        />
                        {
                            isempty &&
                            <span className="text-red-500"> Please fill out the username </span>
                        }

                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            onChange={(e) => dispatch(setUserPassword(e.target.value))}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 3, borderRadius: 2 }}
                            onClick={() => handleNavigation()}
                        >
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            <Box>

            </Box>
        </div>
    );
}