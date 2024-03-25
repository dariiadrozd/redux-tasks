import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Slice/FileSize";

function Task10() {

    const count = useSelector((state) => state.FileSize);
    const dispatch = useDispatch();


    function clickButton1() {
        dispatch(increment())
    }

    function clickButton2() {
        dispatch(decrement())
    }



    return (
        <>
            <h1>Task10</h1>
            <p>
                Создайте компонент, который позволяет пользователю управлять размером текста на странице с помощью кнопок "увеличить" и "уменьшить".
            </p>

            <h1 style={{fontSize: count}}>text</h1>

            <button onClick={clickButton1}>+1</button >
            <button onClick={clickButton2}>-1</button >

                    <p>
                        <Link to="/">HOME</Link>
                    </p>
        </>
    );
}

export default Task10;