import { loginService } from "@container/service/loginService";
import { createAppAsyncThunk } from "../storetypedhooks";
import { setLoginStatus } from "./LoginStoreSlice";

export const login = createAppAsyncThunk<any, {}>('login-user', async (data, { dispatch }) => {

    const payload = { ...data };
    try {
        const result = await loginService(payload);
        if (result.status == 200 && result.data.sucess == true) {
            dispatch(setLoginStatus(true))
        }
        else if (result.data.sucess == false) {
            dispatch(setLoginStatus(false))
        }
    }
    catch (e) {
        console.log("error occured processing API ")
    }

})