import { RootState } from "../AppStore";

export const username = (state: RootState) => state.logIn.username;
export const password = (state: RootState) => state.logIn.password;
export const status = (state: RootState) => state.logIn.status;