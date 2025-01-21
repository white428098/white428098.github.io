import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function HomePage() {
  const navigate = useNavigate()
  const btnList =[
    {
      text:"買不買",
      img:"",
      link:"/buy",
    },
    {
      text:"西陽春棋",
      img:"",
      link:"/chess",
    },
    {
      text:"倒數器",
      img:"",
      link:"/hello_world",
    }
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-5'>
{
        btnList.map((b,i)=><button key={i} onClick={()=>navigate(b.link)} className={`py-3 active:shadow-inner shadow w-full rounded`}>{b.text}</button>)
}
    </div>
  )
}
