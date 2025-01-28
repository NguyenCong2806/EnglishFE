import { createSlice } from '@reduxjs/toolkit'
import { addWordEnglish, updateFile } from '../AsyncThunk/WordAsyncThunk/wordasyncthunk'

const wordSlice = createSlice({
    name: 'word',
    initialState: {
        status: "idle",
        error: "",
        link: "",
    },
    reducers: {
        // ==> normal reducer functions go here
    },
    extraReducers(builder) {
        builder
            .addCase(addWordEnglish.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(addWordEnglish.fulfilled, (state, action) => {
                state.status = "succeeded"

            })
            .addCase(addWordEnglish.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(updateFile.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(updateFile.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.link= action.payload;
            })
            .addCase(updateFile.rejected, (state, action) => {
                state.status = "failed"
            })

    }
})
export const selectWord = (state: any) => state.word;
export default wordSlice.reducer;
