import next from "next"
import { revalidatePath } from "next/cache"
import Link from "next/link";

export const metadata = {
  title:"post page"
}

export default async  function post() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
  const response = await  fetch(baseUrl,{
    next: {
      revalidate:120
    }});
    const posts =await response.json();
   
    const postJsx = posts.map((item)=>{
      return(
        <Link key={item.id}  href={`/posts/${item.id}`}>
            <div  style={{cursor:"pointer", borderRadius:"10px",margin:"1rem 0",backgroundColor:"gray" ,color:"white" , padding:"1rem"}}>
                <h3><strong style={{color:"green", fontSize:"20px"}}>Title: </strong> {item.title}</h3>
                <p><strong style={{color:"green", fontSize:"20px"}}>Description: </strong>{item.body}</p>
            </div>
        </Link>
      )
    })
    
 

  return (
    <div>
     <h1 style={{textAlign:"center"}}>posts page </h1>
      <hr/>
      {postJsx}
  </div>
  )
}
  