import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products: [],
    isLoading: true,
};

export const fetchProducts = createAsyncThunk('products/fetcProducts', async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    return data;

});

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });
    }
});


export const productReducer = productSlice.reducer;
