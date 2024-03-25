import { configureStore } from "@reduxjs/toolkit";
import counter1 from '../Slice/Counter1'
import counter2 from '../Slice/Counter2'
import getInp from '../Slice/InputValue'
import inpForm from "../Slice/InputForm";
import inpForm2 from "../Slice/InputForm2";
import witchText from '../Slice/witchText'
import ValidPass from '../Slice/ValidPass'
import FileSize from '../Slice/FileSize'
import getLang from '../Slice/getLanguage'
import listTask from '../Slice/listTask'


const store = configureStore({
    reducer: {
        counter1: counter1,
        counter2: counter2,
        getInp: getInp,
        inpForm: inpForm,
        inpForm2, inpForm2,
        witchText: witchText,
        ValidPass: ValidPass,
        FileSize: FileSize,
        getLang: getLang,
        listTask: listTask,
    }
})

export default store