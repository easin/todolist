import axios from "../axiosConfig";
export const getTagRequest = config => axios.get(``, config);
export const listTagsRequest = config => axios.get(`/api/tag/list`, config);
export const addTagRequest = config => axios.get(``, config);
export const updateTagsRequest = config => axios.get(``, config);
export const delTagsRequest = config => axios.get(``, config);
