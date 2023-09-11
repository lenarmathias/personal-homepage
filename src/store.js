import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./features/theme/themeSlice";
import { themeSaga } from "./features/theme/themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(themeSaga);

export default store;