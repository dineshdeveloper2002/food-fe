import axios from "axios";
export const loginService = async (obj: any) => {
    return await axios.post('api/login', obj);
}