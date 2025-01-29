import { createSlice } from '@reduxjs/toolkit'
import { addWordEnglish, updateFile } from '../AsyncThunk/WordAsyncThunk/wordasyncthunk'

const initialState =  {
    status: false,
    error: "",
    link: "",
    notify: false,
};

const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        // ==> normal reducer functions go here
    },
    extraReducers(builder) {
        builder
            .addCase(addWordEnglish.pending, (state, action) => {
                state.status = false;
            })
            .addCase(addWordEnglish.fulfilled, (state, action) => {
                state.status = true;
            })
            .addCase(addWordEnglish.rejected, (state, action) => {
                state.status = false;
            })
            .addCase(updateFile.pending, (state, action) => {
                state.status = false;
            })
            .addCase(updateFile.fulfilled, (state, action) => {
                state.status = true;
                state.notify = true;
                state.link= action.payload;
            })
            .addCase(updateFile.rejected, (state, action) => {
                state.status =false;
            })

    }
})
export const selectWord = (state: any) => state.word;
export default wordSlice.reducer;
