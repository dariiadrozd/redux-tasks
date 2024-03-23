import { createSlice } from "@reduxjs/toolkit";

const inpForm2 = createSlice({
    name: 'inpForm2',
    initialState: { value: '', isPalindrome: 'false' },
    reducers: {
        getStr: function (state, params) {
            return { ...state, value: params.payload }
        },
        getPalindrome: function (state, params) {
    
            if (state.value == state.value.split('').reverse().join('')) {
                return {...state, isPalindrome: 'true'}
            } else {
                return {...state, isPalindrome: 'false'}
            }
        }
    }
})

export const { getStr, getPalindrome } = inpForm2.actions
export default inpForm2.reducer;