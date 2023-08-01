import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../types/reduxTypes";

const initialState = {
    products: [],
    isLoading: true,
    product: {} as ProductType,
    showFullDescription: false
};

export const fetchProducts = createAsyncThunk('products/fetcProducts', async (searchTerm: (string | null)) => {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    if (searchTerm) {
        const search = searchTerm.toLocaleLowerCase();
        return data.filter((product: ProductType) => product.title.toLocaleLowerCase().includes(search));
    }
    return data;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId: (string | undefined)) => {
    const {data} = await axios.get('https://fakestoreapi.com/products/' + productId );
    return data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        fullDescription: (state) => {
            state.showFullDescription = true;
        },

        resetProduct: (state) => {
            state.product = {} as ProductType;
            state.showFullDescription = false;
        },

        setIsLoading: (state) => {
            state.isLoading = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchProductById.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        });
    }
});


export const productReducer = productSlice.reducer;

export const { fullDescription, resetProduct, setIsLoading } = productSlice.actions;
