import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>
        <Link to="/task1">Task1</Link>
      </p>
      <p>
        <Link to="/task2">Task2</Link>
      </p>
      <p>
        <Link to="/task3">Task3</Link>
      </p>
      <p>
        <Link to="/task4">Task4</Link>
      </p>
      <p>
        <Link to="/task5">Task5</Link>
      </p>
    </>
  );
}

export default Home;