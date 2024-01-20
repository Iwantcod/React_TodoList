import React, { useEffect, useState } from 'react';


const Clock = () => {
  const [time, setTime] = useState(new Date());

  const year = time.getFullYear();
  const month = String(time.getMonth() + 1);
  const date = String(time.getDate());  // 일
  const day = time.getDay();  // 요일
  const hour = String(time.getHours());
  const minute = String(time.getMinutes());
  const second = String(time.getSeconds());
  
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  const str = `${year}년 ${month.padStart(2,'0')}월 ${date.padStart(2,'0')}일(${dayList[day]}) ${hour.padStart(2,'0')}:${minute.padStart(2,'0')}:${second.padStart(2,'0')}`;

  

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  return (
    <h1>
     {str}
    </h1>
  )
}


export default Clock;