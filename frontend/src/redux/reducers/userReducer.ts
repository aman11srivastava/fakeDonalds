import { createReducer } from "@reduxjs/toolkit";

let initialState: any = {};

export const authReducer = createReducer(initialState, {
    loadUserRequest: state => {
        state.loading = true
    },
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true
        state.user = action.payload
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload
    }
})