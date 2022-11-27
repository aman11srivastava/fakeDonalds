import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { LOAD_USER_FAIL, LOAD_USER_REQUST, LOAD_USER_SUCCESS } from "../constants/constants";

export const loadUser = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUST });
        const { data } = await axios.get('/api/me', {
            withCredentials: true
        });
        dispatch({ type: LOAD_USER_SUCCESS, payload: data?.user });
    } catch (error: any) {
        dispatch({ type: LOAD_USER_FAIL, payload: error?.response?.data?.message });

    }
}