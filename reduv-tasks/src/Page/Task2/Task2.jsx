import { Link } from "react-router-dom";
import { increment, decrement } from '../../Slice/Counter2'
import { useSelector, useDispatch } from "react-redux";



function Task2() {
  const count = useSelector((state) => state.counter2)
  const dispatch = useDispatch()
  
  return (
    <>
      <h1>Task2</h1>
      <p>
        Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
        котором отображается значение (первоначальное значение 1). Ваша задача
        так реализовать функционал, чтобы при клике на кнопку автоматически
        прибавлялась +1 к значению параграфа
      </p>

      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+1</button>
      <button onClick={()=> dispatch(decrement())}>-1</button>


      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task2;