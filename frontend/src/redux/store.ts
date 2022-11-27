import { AnyAction, configureStore, EnhancedStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { authReducer, authReducerInterface } from "./reducers/userReducer";

const store: EnhancedStore<{
    auth: authReducerInterface;
}, AnyAction, [ThunkMiddleware<{
    auth: authReducerInterface;
}, AnyAction, undefined>]> = configureStore({
    reducer: {
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;
