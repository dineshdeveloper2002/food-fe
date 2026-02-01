import { createSlice } from "@reduxjs/toolkit";

export const HomeStore: any = {
    expandbar: false
}

const HomeStoreSlice = createSlice({
    name: 'HomeStore',
    initialState: HomeStore,
    reducers: {
        setBar(state, action) {
            state.expandbar = action.payload
        }
    }
})

export default HomeStoreSlice.reducer;

export const { setBar } = HomeStoreSlice.actions;