import { Link } from "react-router-dom";
import { getStr } from '../../Slice/InputForm'

import { useSelector, useDispatch } from "react-redux";




function Task4() {
    const inp = useSelector((state) => state.inpForm)
    const dispatch = useDispatch()

    function clickButton() {
        const palindrome = inp.split('').reverse().join('')
        if (palindrome == inp) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    return (
        <>
            <h1>Task4</h1>
            <p>
                Создайте компонент формы. По клику на кнопку собрать данные из input и проверить вводимую строку на палиндром
            </p>

            <button onClick={clickButton}>check</button>
            <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}

export default Task4;