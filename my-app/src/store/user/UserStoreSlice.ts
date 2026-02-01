import { uservo } from "@container/interfaces/userVO";
import { createSlice } from "@reduxjs/toolkit";

export const userStore: any = {
    dialog: false,
    uservo: uservo
}

const UserStoreSlice = createSlice({
    name: 'loginStore',
    initialState: userStore,
    reducers: {
        setDialog(state, action) {
            state.dialog = action.payload;
        },
        setUserVO(state, action) {
            state.uservo = action.payload;
        }
    }
})

export default UserStoreSlice.reducer;

export const { setDialog, setUserVO } = UserStoreSlice.actions;