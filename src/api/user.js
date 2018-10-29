import axios from "../axiosConfig";
export const getUserRequest = config => axios.get(``, config);
export const listUsersRequest = config => axios.get(``, config);
export const addUserRequest = config => axios.get(``, config);
export const updateUsersRequest = config => axios.get(``, config);
export const delUsersRequest = config => axios.get(``, config);
