import React from 'react'
import useSwR from 'swr'
const fetcher=async()=>{
    const res=await fetch('http://localhost:4000/dashboard')
    const data=await res.json()
    return data

}
export default function DashboardSwr() {
    const {data,error}=useSwR('dashboard',fetcher)
    if(error) return 'An error has occured'
    if(!data) return 'loading'
  
    return(
        <>
        <h1>My Dashboard</h1>
        <h3>Posts - {data.posts}</h3>
        <h3>Like - {data.likes}</h3>
        <h3>Followers - {data.followers}</h3>
        <h3>Following- {data.following}</h3>
        
        </>
        )
}
