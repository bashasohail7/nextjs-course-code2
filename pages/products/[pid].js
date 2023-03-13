import { Fragment } from "react";
import fs from 'fs'
import path from "path";

function ProductDetailPage({product}){
    if(!product){
        return <center><h3>Loading...</h3></center>
    }
    return (
        <Fragment>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </Fragment>
    )
}
async function getData(){
    const filePath =path.join(process.cwd(),'data','dummy-backend.json')
    let jsonData=fs.readFileSync(filePath)
    const data=JSON.parse(jsonData)
    return data
    
}
export async function getStaticProps(context){
    const {params}=context
    const productId=params.pid
    const data=await getData()
    let filteredData=data.products.find(el=>el.id==productId)
    if(!filteredData){
        return{notFound:true}
    }
    return {
        props:{
            product:filteredData
        }
    }
}
export async function getStaticPaths(){
    const data=await getData()
    const ids=data.products.map(prod=>prod.id)
    const pathsWithParams=ids.map(id=>({params:{pid:id}}))
    // [{params:{pid:'p1'}},
    // {params:{pid:'p2'}},
    // {params:{pid:'p3'}}]
return {
    paths:pathsWithParams,
    
    fallback:true
}
}

export default ProductDetailPage