import { configureStore } from "@reduxjs/toolkit";
import counter1 from '../Slice/Counter1'
import counter2 from '../Slice/Counter2'
import getInp from '../Slice/InputValue'
import inpForm from "../Slice/InputForm";
import inpForm2 from "../Slice/InputForm2";


const store = configureStore({
    reducer: {
     counter1: counter1,
     counter2: counter2,
     getInp: getInp,
     inpForm: inpForm,
     inpForm2, inpForm2,
    }
})

export default store