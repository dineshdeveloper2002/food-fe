import { configureStore } from "@reduxjs/toolkit";
import LoginStoreSlice from "./login/loginStoreSlice";
import { useStore } from 'react-redux';

export const Store = configureStore({
    reducer: {
        logIn: LoginStoreSlice,
    }
});

//  TypeScript store types
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppStore = () => useStore<RootState>();