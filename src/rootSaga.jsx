import { takeEvery } from "redux-saga/effects";
import { getSingleUserSaga, getUserSaga } from "./userSaga";
import { GET_SINGLE_USERS } from "./Redux/Actions/common";

export default function* rootSaga (){
    yield takeEvery (GET_USERS, getUserSaga);
    yield takeEvery (GET_SINGLE_USERS, getSingleUserSaga);
}