import axios from "../axiosConfig";
export const getTaskRequest = params => axios.post(`/api/task/page`, {data:params});
export const listTasksRequest = params => axios.get(`/api/task/page`, {params:params});
export const addTaskRequest = params => axios.get(``, {params:params});
export const updateTasksRequest = params => axios.post(`/api/task/save`, {data:params});
export const delTasksRequest = params => axios.get(``, {params:params});
