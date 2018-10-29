import axios from "../axiosConfig";
export const getTaskRequest = config => axios.get(`/api/task/page`, config);
export const listTasksRequest = config => axios.get(`/api/task/page`, config);
export const addTaskRequest = config => axios.get(``, config);
export const updateTasksRequest = config => axios.get(``, config);
export const delTasksRequest = config => axios.get(``, config);
