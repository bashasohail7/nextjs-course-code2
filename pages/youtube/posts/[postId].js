function Post({post}){
    if(!post){
        return <h2></h2>
    }
    return(
        <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        </>
    )

}
export async function getStaticPaths(){
    const  res=await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data =await res.json()
    // const paths=data.map(post=>{
        // })
        return{
            // params:{postId:post.id}
        paths:     [{params:{postId:'1'}},
    {params:{postId:'2'}},
    {params:{postId:'3'}}],
    fallback:true
        }
    // return {
    //     paths:paths,
    //     fallback:false
    // }
    }
export async function getStaticProps(context){
    const {params}=context
    // const 
const  res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
const data =await res.json()
console.log("data",data)
if(!data.id){
    console.log('not found')
    return {
        notFound:true
    }
}
return {
    props:{
        post:data
    }
}
    
}


export default Post