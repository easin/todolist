import { all } from "redux-saga/effects";
import tag from "./tag";
import task from "./task";
import user from "./user";
export default function* rootSaga() {
  yield all([...tag, ...task, ...user]);
}
