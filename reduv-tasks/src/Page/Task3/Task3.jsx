import { Link } from "react-router-dom";
import { getStr } from '../../Slice/InputValue'
import { useSelector, useDispatch } from "react-redux";



function Task3() {
    const inp = useSelector((state) => state.getInp)
    const dispatch = useDispatch()


    return (
        <>
            <h1>Task3</h1>
            <p>
                Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
                котором отображается значение (первоначальное значение 1). Ваша задача
                так реализовать функционал, чтобы при клике на кнопку автоматически
                прибавлялась +1 к значению параграфа
            </p>

            <h1>{inp}</h1>
            <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}

export default Task3;