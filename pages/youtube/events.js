import React from "react";
import { useState } from "react";
import { useRouter} from 'next/router'
export default function Events({ eventList }) {
    const [options]=useState([...new Set(eventList.map(x=>x.category))])
    const router=useRouter()
    console.log('..options',options)
    const [events,setEvents]=useState(eventList)
    const [filterCat,setFiltercat]=useState('')
    const fetchSportsEvents=async()=>{
        console.log('fil',filterCat)
        const res = await fetch(`http://localhost:4000/events?category=${filterCat}`);
        const data=await res.json()
        // console.log("res.data",res)
setEvents(data)
router.push('/youtube/events?category=sports',undefined,{shallow:true})
    }
  return (
    <>

      <h1>List of events - {events?.length}</h1>
      <select onChange={(e)=>{setFiltercat(e.target.value);console.log(e.target.value)}}>
        <option value=''>Select a category</option>
      { options.map((option,index) => {
        return <option key={index} value={option}>{option}</option>
      })}
      </select>
      <button onClick={fetchSportsEvents} >Go</button>
      {events?.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
  return <div>E</div>;
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/events");
  const data = await res.json();
  return {
    props: {
      eventList: data,
    },
  };
}
