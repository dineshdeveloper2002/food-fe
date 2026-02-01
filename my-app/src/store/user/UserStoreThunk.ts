import { loginService } from "@container/service/loginService";
import { createAppAsyncThunk } from "../storetypedhooks";
import { adduser, getuser, updateuser } from "@container/service/userService";
import { setUserVO } from "./UserStoreSlice";
import { updateUserVO, userVO } from "@container/interfaces/userVO";

export const userThunk = createAppAsyncThunk<any, userVO>('user', async (data, { dispatch }) => {

    const payload = { ...data };
    try {
        const result = await adduser(payload);
        if (result.status == 200 && result.data.sucess == true) {
            dispatch(setUserVO(result.data))
        }
        else if (result.data.sucess == false) {

        }
    }
    catch (e) {
        console.log("error occured processing API ")
    }

})


export const getuserThunk = createAppAsyncThunk<any, any>('getuser', async (data, { dispatch }) => {

    const payload = { data };
    try {
        const result = await getuser(payload);
        if (result.status == 200) {
            dispatch(setUserVO(result.data))
        }
        else if (result.data != 200) {
            console.log("Invalid APi")
        }
    }
    catch (e) {
        console.log("error occured processing API ")
    }

})



export const userUpdateThunk = createAppAsyncThunk<any, {}>('updateuser', async (data, { dispatch }) => {

    const payload = { ...data };
    try {
        const result = await updateuser(payload);
        console.log(payload);
        if (result.status == 200) {
            // dispatch(setUserVO(result.data))
        }
        else if (result.data != 200) {
            console.log("Invalid APi")
        }
    }
    catch (e) {
        console.log("error occured processing API ")
    }

})

export const userdelete = createAppAsyncThunk<any, {}>('deleteuser', async (data, { dispatch }) => {

    const payload = { ...data };
    try {
        const result = await updateuser(payload);
        console.log(payload);
        if (result.status == 200) {

        }
        else if (result.data != 200) {
            console.log("Invalid APi")
        }
    }
    catch (e) {
        console.log("error occured processing API ")
    }

})