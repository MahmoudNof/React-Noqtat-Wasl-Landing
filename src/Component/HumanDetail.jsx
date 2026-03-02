import React, { useState } from 'react'

const HumanDetail = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div style={{textAlign: 'center', margin: '20px'}}>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "اخفاء التفاصيل" : "اظهار التفاصيل الانسانية"}
      </button>
      {showMore && (
        <div className='about-section animate-fade'>
          <h3>تفاصيل اضافية</h3>
          <p>نعمل حالياً على تجهيز الطاولات وتمديد شبكة الإنترنت لنكون جاهزين لاستقبال أول دفعة من الطلاب مع بداية الأسبوع القادم.</p>
        </div>
      )}
    </div>
  )
}
export default HumanDetail