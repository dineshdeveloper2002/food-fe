import axios from "axios";

export const adduser = async (obj: any) => {

    return await axios.post("api/adduser", obj);
}

export const getuser = async (obj: any) => {
    return await axios.post("/api/getuser", obj);
}

export const updateuser = async (obj: any) => {
    return await axios.post("api/updateuserdetails", obj);
}


export const deleteUser = async (obj: any) => {
    return await axios.delete("api/deleteuser", obj);
}