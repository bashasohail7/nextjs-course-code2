function ArticleListByCategory({articles,category}){
return (
    <>
    <h1>Showing news for category <i>{category}</i></h1>
    {
        articles.map((info)=>{
            return(
                <div key={info.id}>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
                </div>
            )
        })
    }
    

    </>
)
}
export default ArticleListByCategory
export async function getServerSideProps(context){
const {params,req,res,query}=context
console.log(".query",query)
console.log("..params",params)
res.setHeader('Set-Cookie',['name=Sohail Basha'])
const {category} =params
const response=await fetch(`http://localhost:4000/news?category=${category}`)
// const response=await fetch(`http://localhost:4000/news/?category=Sports`)
const data=await response.json()
return {
    props:{
        articles:data,
        category
    }
}
}