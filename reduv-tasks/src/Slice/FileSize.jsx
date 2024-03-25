import { createSlice } from "@reduxjs/toolkit";

const FileSize = createSlice({
    name: 'FileSize',
    initialState: 20,
    reducers: {
        increment: function (state) {
            return state + 1
        },
        decrement: function(state){
            return state - 1
        }


    }
})

export const { increment, decrement } = FileSize.actions
export default FileSize.reducer;