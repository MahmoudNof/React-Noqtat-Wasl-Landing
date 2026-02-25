import React from 'react'

const CounterItem = ({title, count, onIncrease}) => {
  return (
    <div className='stat-Card'>
        <h3>{count}</h3>
        <p>{title}</p>
        <button onClick={onIncrease}>+ إضافة {title}</button>
    </div>
  )
}

export default CounterItem