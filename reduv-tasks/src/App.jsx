import { Routes, Route } from "react-router-dom";
import Task1 from "./Page/Task1/Task1";
import Home from "./Page/Home/Home";
import Task2 from "./Page/Task2/Task2";
import Task3 from "./Page/Task3/Task3";
import Task4 from "./Page/Task4/Task4";
import Task5 from "./Page/Task5/Task5";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
      </Routes>
    </>
  );
}

export default App;