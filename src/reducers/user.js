import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {};

export default handleActions(
  {
    [actions.getUserRequest]: (state, action) => ({
      ...state
    }),
    [actions.listUsersRequest]: (state, action) => ({
      ...state
    }),
    [actions.addUserRequest]: (state, action) => ({
      ...state
    }),
    [actions.updateUsersRequest]: (state, action) => ({
      ...state
    }),
    [actions.delUsersRequest]: (state, action) => ({
      ...state
    }),
    [actions.getUserSuccess]: (state, action) => ({
      ...state
    }),
    [actions.getUserFailure]: (state, action) => ({
      ...state
    }),
    [actions.listUsersSuccess]: (state, action) => ({
      ...state
    }),
    [actions.listUsersFailure]: (state, action) => ({
      ...state
    }),
    [actions.addUserSuccess]: (state, action) => ({
      ...state
    }),
    [actions.addUserFailure]: (state, action) => ({
      ...state
    }),
    [actions.updateUsersSuccess]: (state, action) => ({
      ...state
    }),
    [actions.updateUsersFailure]: (state, action) => ({
      ...state
    }),
    [actions.delUsersSuccess]: (state, action) => ({
      ...state
    }),
    [actions.delUsersFailure]: (state, action) => ({
      ...state
    })
  },
  initialState
);
