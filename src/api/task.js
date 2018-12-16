import axios from "../axiosConfig";
export const getTaskRequest = (data) => axios.post(`/api/task/page`, data);
// export const listTasksRequest = params => axios.get(`/api/task/page`, {params:params});//有值 ok

export const listTasksRequest = params => axios.post(`/api/task/page`, params);

export const addTaskRequest = (data) => axios.get(``, data);
export const updateTasksRequest = (params) => axios.post(`/api/task/save`, params);
export const delTasksRequest = (data) => axios.get(``, data);
