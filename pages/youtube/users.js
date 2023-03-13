import { Fragment } from "react";

function UserList({users}){
    return (<Fragment>
        <h1>List of users</h1>
{
    users.map((user)=>{
        return(
            <p key={user.id}>{user.username}</p>
        )
    })
}
    </Fragment>
    )
}
export default UserList;

export async function getStaticProps(){
    const  res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    // console.log("data",data)f
    return {
        props:{
users:data
        }
    };
}