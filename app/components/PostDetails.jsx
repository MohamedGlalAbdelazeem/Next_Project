import React from 'react'
 

export default  async function PostDetails({postId}) {
    await new Promise((resolve)=>{
        setTimeout(() => {
           resolve() 
        }, 1000);
    })
    const baseUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const response = await  fetch(baseUrl,{
      next: {
        revalidate:120
      }});
      const postDetails =await response.json();
      console.log(postDetails);
      
  return (
    <div style={{ borderRadius:"10px",margin:"1rem 0",backgroundColor:"gray" ,color:"white" , padding:"1rem"}}>
    
        <hr/>
        <h3>Title : {postDetails.title}</h3>
        <p>Description : {postDetails.body}</p>
    </div>
  )
}

