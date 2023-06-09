function NewsArticlesList({articles}){
    return(
        <>
    <h1>List of News Articles</h1>
    {
        articles.map((article)=>{
            return(
                <div key={article.id}>
                    <h2>{article.id} {article.title} | {article.category}</h2>
                </div>
            )
        })
    }
        </>
    )
    
    
}
export default NewsArticlesList

export async function getServerSideProps(){
    const res=await fetch('http://localhost:4000/news')
    const data=await res.json()
    return {
        props:{
            articles:data,
        }
    }
}