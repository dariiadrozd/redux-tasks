import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inputValue, addTask, deleteTask } from "../../Slice/listTask";

function Task12() {

    const tasks = useSelector((state) => state.listTask)
    const dispatch = useDispatch()


    return (
        <>
            <h1>Task12</h1>
            <p>
                Реализуйте компонент "Список задач", который позволяет пользователю добавлять, удалять и отмечать задачи как выполненные.
            </p>

            <div>{tasks.array.map((el) => <p>{el}<button id={el} onClick={(e) => dispatch(deleteTask(e.target.id))}>Delete</button></p>)}</div>
            <input type="text" onChange={(e) => dispatch(inputValue(e.target.value))} /><button onClick={() => dispatch(addTask())}>Add</button>


            <p>
                <Link to="/">HOME</Link>
            </p>
        </>
    );
}


export default Task12;