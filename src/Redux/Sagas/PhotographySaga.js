import { call, put } from "redux-saga/effects";
import { get } from "./client";
import { getCategory, getCommercial, getPortfolio } from "../Reducers/PhotographyReducer";

const headers = {
    "x-api-key": "gulmoharphotography"
}

export function* getPortfolioSaga() {
    try {
        const result = yield call(() => get("https://api.gulmoharphotography.com/api/portfolio", headers));
        yield put(getPortfolio(result.data.data ?? []));
    } catch (e) {
        yield put({ type: "NUMBER_SAGA_FAILED" });
    }
}

export function* getCommercialSaga() {
    try {
        const result = yield call(() => get("https://api.gulmoharphotography.com/api/commercial", headers));
        yield put(getCommercial(result.data.data ?? []));
    } catch (e) {
        yield put({ type: "NUMBER_SAGA_FAILED" });
    }
}

export function* getCategorySaga() {
    try {
        const result = yield call(() => get("https://api.gulmoharphotography.com/api/category", headers));
        yield put(getCategory(result.data.data ?? []));
    } catch (e) {
        yield put({ type: "NUMBER_SAGA_FAILED" });
    }
}