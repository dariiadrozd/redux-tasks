import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordValid } from "../../Slice/ValidPass";

function Task9() {
    const password = useSelector((state) => state.ValidPass);
    const dispatch = useDispatch();

    function clickButton() {
        try {
            if (!/[A-Z]+/.test(password)) 
              throw new Error('нет заглавных букв')
            if (!/[a-z]+/.test(password)) 
              throw new Error('нет строчных букв')
            if (!/[0-9]+/.test(password)) 
              throw new Error('нет цифр')
            if (password.length < 8) 
              throw new Error('длина пароля должна быть не менее 8 символов')
            return 'пароль соответствует'
        } catch (error) {
            return error.message
        }
    }

    return (
        <>
            <h1>Task9</h1>
            <p>
                Реализуйте компонент для ввода пароля с валидацией. Пользователь должен ввести пароль, который соответствует определенным требованиям (например, содержание букв, цифр и специальных символов).
            </p>

            <input type="password" onChange={(e) => dispatch(passwordValid(e.target.value))} />

            <button onClick={() => console.log(clickButton())}>check pass</button>

            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}

export default Task9;