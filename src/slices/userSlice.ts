import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    cart: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export const userReducer = userSlice.reducer;