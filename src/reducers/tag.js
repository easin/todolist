import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {};

export default handleActions(
  {
    [actions.getTagRequest]: (state, action) => ({
      ...state
    }),
    [actions.listTagsRequest]: (state, action) => ({
      ...state
    }),
    [actions.addTagRequest]: (state, action) => ({
      ...state
    }),
    [actions.updateTagsRequest]: (state, action) => ({
      ...state
    }),
    [actions.delTagsRequest]: (state, action) => ({
      ...state
    }),
    [actions.getTagSuccess]: (state, action) => ({
      ...state
    }),
    [actions.getTagFailure]: (state, action) => ({
      ...state
    }),
    [actions.listTagsSuccess]: (state, action) => ({
      ...state
    }),
    [actions.listTagsFailure]: (state, action) => ({
      ...state
    }),
    [actions.addTagSuccess]: (state, action) => ({
      ...state
    }),
    [actions.addTagFailure]: (state, action) => ({
      ...state
    }),
    [actions.updateTagsSuccess]: (state, action) => ({
      ...state
    }),
    [actions.updateTagsFailure]: (state, action) => ({
      ...state
    }),
    [actions.delTagsSuccess]: (state, action) => ({
      ...state
    }),
    [actions.delTagsFailure]: (state, action) => ({
      ...state
    })
  },
  initialState
);
