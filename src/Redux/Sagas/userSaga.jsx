import { call, put } from "redux-saga/effects";
import { get } from "./client";
import { getUser } from "../Reducers/userSlice";

export function* getUserSaga(){
    try {
        const result = yield call(() => get("https://rickandmortyapi.com/api/character"));
        console.log(`result.data`,result.data)
        console.log(`result.data.data`, result.data.data)
        yield put(getUser(result.data.results ?? []));
    } catch (e){
        yield put({type: "NUMBER_SAGA_FAILED"});
    }
}
