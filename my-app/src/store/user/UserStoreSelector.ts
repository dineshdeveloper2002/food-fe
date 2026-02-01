import { RootState } from "../AppStore";

export const dialog = (state: RootState) => state.User.dialog;
export const userVo = (state: RootState) => state.User.uservo;