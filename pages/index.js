import fs from 'fs'
import path from 'path';
import Link from 'next/link';
function HomePage(props) {
  const {products}=props
  return (
    <ul>
      <li><Link href ='/home'>Home</Link></li>
      {products.map((info)=>(
        <li>
          <Link href={`products/${info.id}`}>{info.title}</Link>
          </li>
      ))} 
     
    </ul>
  );
}
export async function getStaticProps(context){
  console.log("re-generating...")
  const filePath =path.join(process.cwd(),'data','dummy-backend.json')
   let jsonData=fs.readFileSync(filePath)
   const data=JSON.parse(jsonData)
  if(data.products.length==0){
    return {notFound:true}
  }
   if(!data){
    return {redirect :{
      destination:'/no-data'
    }}
   }
  return {
    props:{
    products:data.products
  },
  revalidate:10,
}
}

export default HomePage;
