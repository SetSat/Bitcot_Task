import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json');
    return response.json();
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({ id: state.items.length + 1, ...action.payload });
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addItem, updateItem, deleteItem } = dataSlice.actions;

export default dataSlice.reducer;
