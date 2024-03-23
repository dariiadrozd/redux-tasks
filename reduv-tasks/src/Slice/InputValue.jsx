import { createSlice } from "@reduxjs/toolkit";

const getInp = createSlice({
    name: 'getInp',
    initialState: '',
    reducers: {
        getStr: function (state, params) {
            return params.payload
        },

    }
})

export const { getStr } = getInp.actions
export default getInp.reducer;