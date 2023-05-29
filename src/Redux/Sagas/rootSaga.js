import { takeEvery } from 'redux-saga/effects';
import { GET_CATEGORY, GET_COMMERCIAL, GET_PORTFOLIO, GET_USERS } from '../Actions/common';
import { getUserSaga } from './userSaga';
import { getCategorySaga, getCommercialSaga, getPortfolioSaga } from './PhotographySaga';

export default function* rootSaga() {
    yield takeEvery(GET_USERS, getUserSaga);
    yield takeEvery(GET_PORTFOLIO, getPortfolioSaga);
    yield takeEvery(GET_COMMERCIAL, getCommercialSaga);
    yield takeEvery(GET_CATEGORY, getCategorySaga);
}