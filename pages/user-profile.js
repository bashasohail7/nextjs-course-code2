function UserProfilePage(props){
return <h1>{props.username}</h1>
}
export default UserProfilePage

export async function getServerSideProps(context){
    //in this context unlike in staticProps we have access to entire request body
const {params,req,res}=context
console.log('')
    return{
        props:{
            username:'Max'
        }
    }
}