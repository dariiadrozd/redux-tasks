import { createSlice } from "@reduxjs/toolkit";

const inpForm = createSlice({
    name: 'inpForm',
    initialState: '',
    reducers: {
        getStr: function (state, params) {
            return params.payload
        },

    }
})

export const { getStr } = inpForm.actions
export default inpForm.reducer;