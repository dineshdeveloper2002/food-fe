import { createSlice } from "@reduxjs/toolkit";

export const loginStore: any = {
    username: "",
    password: "",
    status: false
}

const LoginStoreSlice = createSlice({
    name: 'loginStore',
    initialState: loginStore,
    reducers: {
        setUserName(state, action) {
            state.username = action.payload;
        },
        setUserPassword(state, action) {
            state.password = action.payload
        },
        setLoginStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export default LoginStoreSlice.reducer;

export const { setUserName, setUserPassword, setLoginStatus } = LoginStoreSlice.actions;