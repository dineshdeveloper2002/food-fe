export interface userVO {
    employeeID: string,
    username: string,
    email: string,
    role: string,
}

export interface updateUserVO extends userVO {
    id?: string
}

export const updateUserVO: updateUserVO = {
    id: "",
    employeeID: "",
    username: "",
    email: "",
    role: ""
}

export const uservo: userVO[] = [{
    employeeID: "",
    username: "",
    email: "",
    role: "",
}]