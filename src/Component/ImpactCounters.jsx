import React, {useState} from 'react'
import CounterItem from './CounterItem'

const ImpactCounters = () => {
    const [students, setStudents] = useState(0);
    const [seats, setSeats] = useState(0);
    const [donors, setDonors] = useState(0);
  return (
    <div className='stats-Container'>
        <CounterItem 
            title="طالب"
            count={students}
            onIncrease={()=> setStudents(students + 1)}
        />
        <CounterItem 
            title="مقعد"
            count={seats}
            onIncrease={()=> setSeats(seats + 1)}
        />
        <CounterItem 
            title="متبرع" 
            count={donors}
            onIncrease={()=> setDonors(donors + 1)}
        />
    </div>
  );
}

export default ImpactCounters;
