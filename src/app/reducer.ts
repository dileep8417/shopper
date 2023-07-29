import { productReducer } from "../slices/productsSlice";
import { categoriesReducer } from "../slices/categoriesSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    'products': productReducer,
    'categories': categoriesReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;