import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Sagas/rootSaga";
import userSlice from "./Reducers/userSlice";
import PhotographyReducer from "./Reducers/PhotographyReducer";

let SagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        user: userSlice,
        photography: PhotographyReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(SagaMiddleware)
});

SagaMiddleware.run(rootSaga)