import { createAction } from "redux-actions";
export const getTaskRequest = createAction("GET_TASK_REQUEST");
/*请求时候*/
export const listTasksRequest = createAction("LIST_TASKS_REQUEST");
export const addTaskRequest = createAction("ADD_TASK_REQUEST");
export const updateTasksRequest = createAction("UPDATE_TASKS_REQUEST");
export const delTasksRequest = createAction("DEL_TASKS_REQUEST");
export const getTaskSuccess = createAction("GET_TASK_SUCCESS");
export const getTaskFailure = createAction("GET_TASK_FAILURE");
export const listTasksSuccess = createAction("LIST_TASKS_SUCCESS");
export const listTasksFailure = createAction("LIST_TASKS_FAILURE");
export const addTaskSuccess = createAction("ADD_TASK_SUCCESS");
export const addTaskFailure = createAction("ADD_TASK_FAILURE");
export const updateTasksSuccess = createAction("UPDATE_TASKS_SUCCESS");
export const updateTasksFailure = createAction("UPDATE_TASKS_FAILURE");
export const delTasksSuccess = createAction("DEL_TASKS_SUCCESS");
export const delTasksFailure = createAction("DEL_TASKS_FAILURE");

/*TODOLIST 上拉刷新操作*/
export const onHeaderRefreshRequest = createAction("ON_HEADER_REFRESH_REQUEST");
export const onHeaderRefreshSuccess = createAction("ON_HEADER_REFRESH_SUCCESS");
export const onHeaderRefreshFailure = createAction("ON_HEADER_REFRESH_FAILURE");
/*TODOLIST 下拉刷新操作*/
export const onFooterRefreshRequest = createAction("ON_FOOTER_REFRESH_REQUEST");
export const onFooterRefreshSuccess = createAction("ON_FOOTER_REFRESH_SUCCESS");
export const onFooterRefreshFailure = createAction("ON_FOOTER_REFRESH_FAILURE");
