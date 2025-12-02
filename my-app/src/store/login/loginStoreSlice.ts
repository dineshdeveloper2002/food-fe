import { createSlice } from "@reduxjs/toolkit";

export const loginStore: any = {
    username: "",
    password: ""
}

const LoginStoreSlice = createSlice({
    name: 'loginStore',
    initialState: loginStore,
    reducers: {
        setUserName(state, action) {
            state.username = action.payload;
        }
    }
})

export default LoginStoreSlice.reducer;

export const { setUserName } = LoginStoreSlice.actions;