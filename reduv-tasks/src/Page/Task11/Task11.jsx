import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLang } from "../../Slice/getLanguage";

function Task11() {

    const arr = {
        Rus: {
            header: 'Типы данных',
            description: 'описаниеф типов данных',
        },
        En: {
            header: 'Data Types',
            description: 'description Data Types',
        },

    }

    const lang = useSelector((state) => state.getLang)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Task11</h1>
            <p>
                Создайте компонент, который позволяет пользователю выбирать язык интерфейса. При выборе языка текст на странице должен изменяться соответствующим образом.
            </p>

            <button onClick={() => dispatch(getLang('Rus'))}>Rus</button >
            <button onClick={() => dispatch(getLang('En'))}>En</button >

            <h1>{arr[lang]?.header}</h1>
            <h1>{arr[lang]?.description}</h1>

            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}

export default Task11;