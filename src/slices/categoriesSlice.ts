import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/categories');
    return data;
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload.data;
        });
    }
});

export const categoriesReducer = categoriesSlice.reducer;