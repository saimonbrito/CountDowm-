import { useEffect, useState } from 'react'



const countDown_initial = 25*60 ; //imitos inicio


function  LogicaCountDowm(){
  const [count, setCount] = useState(countDown_initial);

    useEffect(()=>{
       
     if (count > 0){
      setTimeout(()=>{
        setCount(state => state - 1);
      },1000)
     }else{
      alert('O SEU TEMPO TERMINOU..!')
     }

    },[count]);

   const minutes = Math.floor(count / 60);
   const seconds = count % 60;


  return (
    <>
      <span>{String(minutes).padStart(2,'0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2,'0')}</span>
    
 
    </>
  )
}

export default LogicaCountDowm