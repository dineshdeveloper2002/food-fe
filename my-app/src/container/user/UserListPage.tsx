import {
    Box,
    Button,
    ClickAwayListener,
    IconButton,
    Paper,
    Popper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "@container/store/storetypedhooks";
import { dialog, userVo } from "@container/store/user/UserStoreSelector";
import { setDialog, setUserVO } from "@container/store/user/UserStoreSlice";
import { useEffect, useRef, useState } from "react";
import { updateUserVO, userVO } from "@container/interfaces/userVO";
import { login } from "@container/store/login/LoginStoreThunk";
import { getuserThunk, userThunk, userUpdateThunk } from "@container/store/user/UserStoreThunk";
import { DeleteOutline, MoreVertOutlined, TextFieldsOutlined } from "@mui/icons-material";

export const UserListPage = () => {
    const dispatch = useAppDispatch();
    const openDialog = useAppSelector(dialog);
    const [updatedialog, setupdatedialog] = useState<boolean>(false);
    const uservo = useAppSelector(userVo);
    const [user, setUser] = useState<userVO>(uservo);
    const [updateuser, setUpdate] = useState<updateUserVO>(updateUserVO);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const threedotRef = useRef<HTMLButtonElement | null>(null);

    const handleClick = () => {
        dispatch(setDialog(!openDialog));
    };

    const handleUpdateClick = (userlist: updateUserVO) => {
        setupdatedialog((prev) => !prev)
        setUpdate({ ...userlist })
    }


    const handleSave = () => {
        dispatch(userThunk(user));
        dispatch(getuserThunk(user));
        handleClick();
    }

    const handleClickUpdate = () => {
        const mergedUser = { ...updateuser, ...user }
        setUpdate(mergedUser)
        dispatch(userUpdateThunk(mergedUser))
        dispatch(getuserThunk(user));
        setupdatedialog((prev) => !prev)
    }

    const handleDelete = (userid: any) => {

    }

    useEffect(() => {
        dispatch(getuserThunk(user));
    }, [userUpdateThunk])

    return (
        <>
            <div className="bg-amber-200 h-[55px] flex items-center justify-between px-4">
                <Typography>User Management</Typography>

                <TextField placeholder="Search users" />

                <IconButton ref={anchorRef} onClick={handleClick}>
                    <AddIcon />
                </IconButton>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {uservo.length > 0 ? uservo.map((userdata: any) => (
                            <TableRow>
                                <TableCell>{userdata.employeeID}</TableCell>
                                <TableCell>{userdata.username}</TableCell>
                                <TableCell>{userdata.email}</TableCell>
                                <TableCell>{userdata.role}</TableCell>
                                <TableCell>active</TableCell>
                                <TableCell>
                                    <IconButton ref={threedotRef} onClick={() => handleUpdateClick(userdata)}>
                                        <MoreVertOutlined />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleDelete(userdata.id)}>
                                        <DeleteOutline />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )) : "No users are added "
                        }

                    </TableBody>
                </Table>
            </TableContainer >

            <ClickAwayListener onClickAway={() => handleClick}>
                <Popper
                    open={openDialog}
                    anchorEl={anchorRef.current}
                    placement="bottom-start"
                    sx={{ zIndex: 1300 }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            width: 320,
                            p: 2,
                            borderRadius: 2,
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.12)",
                        }}
                    >
                        <Box>
                            <Grid container spacing={2}>

                                <div>
                                    <TextField
                                        label="EmployeID"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setUser({ ...user, employeeID: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Username"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <TextField
                                        label="Email"
                                        fullWidth
                                        size="medium"
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Role"
                                        placeholder="Enter role"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setUser({ ...user, role: e.target.value })}
                                    />
                                </div>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid container direction="row">
                                <Grid>
                                    <Button onClick={handleClick}>Cancel</Button>
                                </Grid>

                                <Grid>
                                    <Button onClick={handleSave}>
                                        <Typography>Add</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Popper>
            </ClickAwayListener>

            <ClickAwayListener onClickAway={() => handleClick}>
                <Popper
                    open={updatedialog}
                    anchorEl={threedotRef.current}
                    placement="auto-start"
                    sx={{ zIndex: 1300 }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            width: 320,
                            p: 2,
                            borderRadius: 2,
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.12)",
                        }}
                    >
                        <Box>
                            <Grid container spacing={2}>
                                <div>
                                    <TextField
                                        autoComplete="off"
                                        label="EmployeID"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setUser({ ...user, employeeID: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        autoComplete="off"
                                        label="Username"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Email"
                                        fullWidth
                                        size="medium"
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Role"
                                        placeholder="Enter role"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setUser({ ...user, role: e.target.value })}
                                    />
                                </div>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid container direction="row">
                                <Grid>
                                    <Button onClick={() => setupdatedialog((prev) => !prev)}>Cancel</Button>
                                </Grid>

                                <Grid>
                                    <Button onClick={handleClickUpdate}>
                                        <Typography>Update</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Popper>
            </ClickAwayListener>
        </>
    );
};
