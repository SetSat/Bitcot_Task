import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice/contactSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
});
