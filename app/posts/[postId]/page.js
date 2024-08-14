 import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default  async function PostDetailsPage({params}) {
    const postId = params.postId;

    const loadingJsx = (
      <div   className="spinner">
      <div
      style={{
      width: '160px',
      height: '160px',
      border: '4px solid rgba(0, 0, 0, 0.1)',
      borderTop: '4px solid #000',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      }}
  > 
</div>
</div>
    );
  return (
    <div style={{ borderRadius:"10px",margin:"1rem 0",backgroundColor:"gray" ,color:"white" , padding:"1rem"}}>
        <h1>Post Details </h1>
        <Suspense fallback={loadingJsx}>
          <PostDetails postId={postId}/>
        </Suspense>
    </div>
  )
}

