import { Link } from "react-router-dom";
import { getStr, getPalindrome } from '../../Slice/InputForm2'
import { useSelector, useDispatch } from "react-redux";




function Task6() {
    const inp = useSelector((state) => state.inpForm2)
    const dispatch = useDispatch()

    function clickButton() {
        dispatch(getPalindrome())
    }


    return (
        <>
            <h1>Task6</h1>
            <p>
            Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается
            </p>
            <h1>{inp.isPalindrome}</h1>
            <button onClick={()=> dispatch(show)}>check</button>
            <button onClick={()=> dispatch(hide)}>check</button>
            <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}

export default Task6;