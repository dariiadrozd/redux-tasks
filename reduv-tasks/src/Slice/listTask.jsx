import { createSlice } from "@reduxjs/toolkit";

const listTask = createSlice({
    name: 'listTask',
    initialState: { array: ['darya', 'drozd', 'wife', 'cat', 'orange'], input: '' },
    reducers: {
        inputValue: function (state, params) {
            return { ...state, input: params.payload }
        },
        addTask: function (state, params) {
            return { ...state, array: [...state.array, state.input] }
        },
        deleteTask: function (state, params) {
            const result = state.array.filter((el) => el != params.payload)
            return { ...state, array: result }
        },
    }
})

export const { inputValue, addTask, deleteTask } = listTask.actions
export default listTask.reducer;