import { useEffect, useState } from "react";


function Dashboard(){
const [isLoading,setIsLoading]=useState(true)
const [dashboardData,setDashboardData]=useState(null)
useEffect(()=>{
async function fetchDashboardData(){
    const res=await fetch('http://localhost:4000/dashboard')
    const data=await res.json()
    setDashboardData(data)
    setIsLoading(false)
}
fetchDashboardData()
},[])
if(isLoading){
    return <h3>Loading...</h3>
}
return(
<>
<h1>My Dashboard</h1>
<h3>Posts - {dashboardData.posts}</h3>
<h3>Like - {dashboardData.likes}</h3>
<h3>Followers - {dashboardData.followers}</h3>
<h3>Following- {dashboardData.following}</h3>

</>
)
}
export default Dashboard;