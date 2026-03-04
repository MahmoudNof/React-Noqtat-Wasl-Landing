import { useState } from "react";
import "./App.css";
// استيراد الصور
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
// استيراد المكونات
import Navbar from "./Component/Navbar";
import ImpactCounters from "./Component/ImpactCounters";
import Gallery from "./Component/Gallery";
import TaskSystem from "./Component/TaskSystem";
import About from "./Component/About";
import HumanDetail from './Component/HumanDetail'
import sections from "./data";

function App() {
  const [tasks, setTasks] = useState(["تعلم اساسيات رياكت"]);
  const [inputValue, setInputValue] = useState("");
  const images = [img1, img2, img3, img4, img5];

  const addTask = (text) => {
    setTasks([text, ...tasks]);
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div id="navbar" ><Navbar /></div>
<h1 className="text-rose-600 text-center text-4xl">مبادرة نقطة وصل</h1>
      <div id="impact"><ImpactCounters /></div>
      <div id="gallery"><Gallery images={images} /></div>
      <div id="humanDetail"><HumanDetail /></div>
      {sections.map((sec, index) => (
        <About key={index} aboutTitle={sec.title} aboutContent={sec.content} />
      ))}
      <div id="taskSystem"><TaskSystem
        tasks={tasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
        deleteTask={deleteTask}
      /></div>
      
    </div>
  );
}

export default App;
