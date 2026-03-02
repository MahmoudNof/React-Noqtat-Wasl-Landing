import { useState } from 'react'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'
import img5 from './assets/img5.jpeg'
import About from './Component/About'
import sections  from './data'
import './App.css'
import ImpactCounters from './Component/ImpactCounters'
import Navbar from './Component/Navbar'

function App() {
  const [tasks, setTasks] = useState(["تعلم اساسيات رياكت"])
  const [inputValue, setInputValue] = useState("");
  const [showMore, setShowMore] = useState(false)
  const addTask = (text) => {
    setTasks([text, ...tasks]);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !==index))
  }

 

  const images = [img1, img2, img3, img4, img5]

  return (
    <div className='App'>
      <Navbar />
      
      <h1>مبادرة نقطة وصل</h1>

      <ImpactCounters />
      
      {/* <img src={img1}  alt="واقع المبادرة" /> */}
      <div className='gallery-grid'>
        {images.map((pic, index) => (
          <img key={index} src={pic} alt={`واقع المبادرة ${index + 1}`} className="grid-item"  />
        ))}
      </div>
        {/* الزر الذكي */}
      <div style={{textAlign: 'center', margin: '20px'}}>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "اخفاء التفاصيل" : "اظهار التفاصيل الانسانية" }
        </button>
      </div>
        
        {/* النص الذي يظهر ويختفي */}
        {showMore && (
          <div className='about-section animate-fade'>
            <h3>تفاصيل اضافية</h3>
            <p>نعمل حالياً على تجهيز الطاولات وتمديد شبكة الإنترنت لنكون جاهزين لاستقبال أول دفعة من الطلاب مع بداية الأسبوع القادم.</p>
          </div>
        )}

      {sections.map((sec, index) => (
        <About key={index} aboutTitle={sec.title} aboutContent={sec.content} />
      ))}

      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="... اكتب مهمة جديدة" />
      <button onClick={() => inputValue && addTask(inputValue)}>اضافة مهمة تجريبية</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>حذف المهمة</button> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
