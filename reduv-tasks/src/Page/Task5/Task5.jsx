import { Link } from "react-router-dom";
import { getStr, getPalindrome } from '../../Slice/InputForm2'
import { useSelector, useDispatch } from "react-redux";




function Task5() {
    const inp = useSelector((state) => state.inpForm2)
    const dispatch = useDispatch()

    function clickButton() {
        dispatch(getPalindrome())
    }


    return (
        <>
            <h1>Task5</h1>
            <p>
                Создайте компонент формы. По клику на кнопку собрать данные из input и проверить вводимую строку на палиндром
            </p>
            <h1>{inp.isPalindrome}</h1>
            <button onClick={clickButton}>check</button>
            <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}

export default Task5;